# Appointment Booking System

A simple yet functional Appointment Booking System with a **Node.js & Express backend** and a **React.js frontend**, secured using 
**JWT-based authentication**.

## 1. Tech Stack ##

- **Node.js**
- **Express.js**
- **React.js**
- **Bootstrap** 
- **Bootstrap & AntD(styling)** 
- **MySQL** 
- **JWT**

---

## 2. Project Structure ##

- appointment-booking-api (Node.js & Express Backend)
- appointment-booking-ui (React.js Frontend)
- appointment_booking_dump.sql (Database Dump)
- README.md (Project Documentation)

---

## Live Demo
- **Frontend:** [https://appointment-booking-ky16itzbp-mustapha-musa-s-projects.vercel.app](https://appointment-booking-ky16itzbp-mustapha-musa-s-projects.vercel.app)
- **Backend:** [https://appointment-booking-api-ufj8.onrender.com](https://appointment-booking-api-ufj8.onrender.com/api/) 

---

## 3. Setup MySQL Database ##

- **Install MySQL**
- **Import the database dump:**

  `mysql -u root -p appointments_app < appointment_booking_dump.sql`

---

## 4 Setup & Installation ##

- **Clone the repository:**
  `git clone https://github.com/musty-codified/appointment-booking-system.git`
- **Navigate to the backend:**

  `cd appointment-booking-system/appointment-booking-api`

  `npm install`
- **Configure environment:** Create and configure `.env` with your custom configurations.

  `cp .env.example .env`
- **Run the backend project:**

  `npm start`

- The backend will start on **`http://localhost:8000`**.


- **Navigate to the frontend:**

  `cd ../appointment-booking-api`

  `npm install`
- **Run the React project:**

  `npm start`

---


## 5. Access the Application ##

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:8000


## 6. API Authentication ##

- API endpoints require a **JWT token** for access.
- Obtain a token via the **User Login** and pass it in the request header:
  ```sh
  Authorization: Bearer <your-token-here>
  ```

---


