
import React from "react";
import { Calendar, Badge, Modal, Select, Button, message } from "antd";
import { useAuth } from "../../context/AuthContext.js";
import './UserBooking.css'

const BookinAppointment = () => {

const {
    getAllBookings,
    addBookingConfig,
    handleDateSelection,
    selectedDate,
    setSelectedTime,
    availableSlots,
    isModalOpen,
    setIsModalOpen
  } = useAuth();


    // Function to render booked slots as Badges
  const dateCellRender = (value) => {
    const bookedSlots = getAllBookings
    .filter(booking => booking.date === value.format("YYYY-MM-DD"))
    .map(booking => booking.time_slot);

    return bookedSlots.length > 0 ? (
      <ul className="events">
        {bookedSlots.map((slot, index) => (
          <li key={index}>
            <Badge status="error" text={slot} style={{ color: "red" }}/>
          </li>
        ))}
      </ul>
    ) : null;
  };

  return (
    <div className="user-booking-container">
      <h2>Book an Appointment</h2>
      <Calendar fullscreen onSelect={handleDateSelection} dateCellRender={dateCellRender} />

      {/* Booking Modal */}
      <Modal
        title="Book Appointment"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <p><b>Selected Date:</b> {selectedDate ? selectedDate.format("YYYY-MM-DD") : "None"}</p>
        <Select
          placeholder="Select Time Slot"
          style={{ width: "100%", marginBottom: "10px" }}
          onChange={(value) => setSelectedTime(value)}
        >
          {availableSlots.map((slot, index) => (
            <Select.Option key={index} value={slot}>
              {slot}
            </Select.Option>
          ))}
        </Select>
        <Button type="primary" onClick={addBookingConfig} block>
          Confirm Booking
        </Button>
      </Modal>
    </div>
  );
}

export default BookinAppointment;