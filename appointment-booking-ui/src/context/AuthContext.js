import React, { useState, useEffect, createContext } from "react";
import {
  apiPost,
  apiGet,
  apiPut,
  apiPostAuthorization,
  apiDeleteAuthorization,
} from "../utils/api/Axios.js";

import {
  errorNotification,
  successNotification,
} from "../components/Notification.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { decodeJwt, redirectToUserPage } from "../utils/RoleUrlRouter.js";
import dayjs from "dayjs";

export const dataContext = createContext();

const DataProvider = ({ children }) => {

    // Authentication
  const [localStorageValue, setLocalStorageValue] = useState(false);

    // Booking System States
  const [getBookingsUrl, setGetBookingsUrl] = useState("appointments");
  const [loading, setLoading] = useState(false);
  const [getAllBookings, setGetAllBookings] = useState([]);

  const [headerTitle, setHeaderTitle] = useState("Add New Booking");

    // Calendar & Modal States
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


    // **Predefined time slots (08:00 - 17:00 in 30-min intervals)**
    const allTimeSlots = [
      "08:00-08:30", "08:30-09:00", "09:00-09:30", "09:30-10:00",
      "10:00-10:30", "10:30-11:00", "11:00-11:30", "11:30-12:00",
      "12:00-12:30", "12:30-13:00", "13:00-13:30", "13:30-14:00",
      "14:00-14:30", "14:30-15:00", "15:00-15:30", "15:30-16:00",
      "16:00-16:30", "16:30-17:00"
    ];



  /** =====================Register User===================== **/
  const registerConfig = async (formData) => {
    try {
      const registerData = {
        email: formData.email,
        password: formData.password,
      };

      console.log(formData);
      const res = await apiPost("auth/register", registerData);

      if (res && res.data) {
        successNotification("Successfully registered");
        console.log(res.data);

        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err) {
      errorNotification(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  //======================Login User======================//
  const loginConfig = async (loginFormData, location, navigate) => {
    try {
      const loginData = {
        email: loginFormData.email,
        password: loginFormData.password,
      };

      const res = await apiPost("auth/login", loginData);
      console.log(res);
      console.log(res.data);

      if (res.data) {
        successNotification("Login ucessful");

        console.log(res.data);

        const jwtInfo = decodeJwt(res.data.token);
        localStorage.setItem("signature", res.data.token);
        localStorage.setItem("role", res.data.role);

        setLocalStorageValue(localStorage.getItem("signature"));
        redirectToUserPage(location, navigate, jwtInfo.role);
      } else {
        successNotification(res.data.data);
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      }
    } catch (err) {
      console.error("Error during login:", err);
      errorNotification(err.response.data.message);

      if (err.response && err.response.data) {
        console.log(err.response.data);
      }
    }
  };

  /**=================Fetch All Bookings ================== **/
  const fetchAllBookings = async () => {
    console.log("fetchAllBookings function is executing...");

    try {
      const allBookingsUrl = `${getBookingsUrl}?pageNo=${pageNumber}`;
      console.log(allBookingsUrl);

      setLoading(true);
      const res = await apiGet(allBookingsUrl);
      if (res.data) {
        let data = res.data;
        console.log(data);

        const formattedData = data.map((booking) => ({
          key: booking.id,
          username: `User ${booking.user_id}`,
          date: new Date(booking.date).toLocaleDateString(),
          timeSlot: booking.time_slot,
        }));

        setGetAllBookings(formattedData);
        console.log("Formatted Bookings Data:", formattedData);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err) {
      console.error("Error during login:", err);
      errorNotification(
        err.response?.data?.message || "Error fetching bookings"
      );
    }
  };

  /**==================Add New Booking================== **/
  const addBookingConfig = async () => {

    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time slot!");
      return;
    }

    const token = localStorage.getItem("signature");
    const jwtInfo = decodeJwt(token);
    const userId = jwtInfo.id;

    const bookingData = {
      userId, 
      date: selectedDate.format("YYYY-MM-DD"),
      timeSlot: selectedTime,
    };


    try {
      console.log("Request Payload:", bookingData);

      const res = await apiPostAuthorization("appointments", bookingData);

      if (res.data) {
        console.log("Response Data:", res.data);
        successNotification("Appointment Booked successfully");
        fetchAllBookings();
        setIsModalOpen(false);
      }
    } catch (err) {
      console.error("API Error:", err);
      errorNotification(err.response?.data?.message || "Booking failed");
    } finally {
      // setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, []);

  /** ================== Handle Date Selection ================== **/
  const handleDateSelection = (value) => {
    setSelectedDate(value);
    console.log("Selected Date:", value.format("YYYY-MM-DD"));

    const bookedSlots = getAllBookings
      .filter(booking => dayjs(booking.date).isSame(value, "day"))
      .map(booking => booking.time_slot);

     setAvailableSlots(allTimeSlots.filter(slot => !bookedSlots.includes(slot)));
    setIsModalOpen(true);
  };


  /**==========================================LOGOUT======================================= **/
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <dataContext.Provider
      value={{
        registerConfig,
        loginConfig,
        localStorageValue,
        fetchAllBookings,
        getAllBookings,
        getBookingsUrl,
        setGetBookingsUrl,
        addBookingConfig,
        setHeaderTitle,
        headerTitle,
        logout,
        loading,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        availableSlots,
        isModalOpen,
        setIsModalOpen,
        handleDateSelection
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(dataContext);
  if (context === "undefined") {
    throw new Error("useAuth must be used within the auth provider");
  }
  console.log("useAuth Context:", context);
  return context;
};

export default DataProvider;
