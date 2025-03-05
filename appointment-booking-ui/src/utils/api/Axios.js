import axios from "axios";
const baseUrl = "http://localhost:8000/api/";

// const baseUrl = "https://appointment-booking-api-ufj8.onrender.com/api/";
console.log("Base API URL:", baseUrl);

export const apiPost = async(path, data) => {

  try {
    console.log("DATA SENT:", data);
    const response = await axios.post(`${baseUrl}${path}`, data);
    console.log("RESPONSE:", response.data);
    return response;
} catch (error) {
    console.error("ERROR RESPONSE:", error.response);
    throw error;
}
};

export const apiPostAuthorization = (path, data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("signature")}`,
      },
    };
  
    return axios.post(`${baseUrl}${path}`, data, config);
  }


export const apiGet = (path) => {
    return axios.get(`${baseUrl}${path}`);
};

export const apiGetAuthorization = (path) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("signature")}`,
      },
    };
  
    return axios.get(`${baseUrl}${path}`, config);
}

export const apiDelete = (path) => {
    return axios.delete(`${baseUrl}${path}`);
  };


  export const apiDeleteAuthorization = (path) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("signature")}`,
      },
    };
  
    return axios.delete(`${baseUrl}${path}`, config);
  };

  export const apiPut = (path,data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("signature")}`
        }
    }
    return axios.put(`${baseUrl}${path}`, data, config);
  };