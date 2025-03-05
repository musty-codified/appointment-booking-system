# Appointment Booking System

A simple yet functional Appointment Booking System with a **Node.js & Express backend** and a **React.js frontend**, secured using **JWT-based authentication**.

## 1. Tech Stack ##

- **Backend:** Node.js, Express.js, MySQL
- **Frontend:** React.js, AntD, BootStrap
- **Authentication:** JWT

---

## 2. Project Structure ##

```
appointment-booking-system/
│──appointment-booking-api (Node.js & Express Backend)
│──appointment-booking-ui (React.js Frontend)
│──appointment_booking_dump.sql (Database Dump)
│──README.md (Project Documentation)

```
---

## 3. Live Demo
- **Frontend:** [https://appointment-booking-ezp7bf7x1-mustapha-musa-s-projects.vercel.app](https://appointment-booking-ky16itzbp-mustapha-musa-s-projects.vercel.app)
- **Backend:** [https://appointment-booking-api-ufj8.onrender.com](https://appointment-booking-api-ufj8.onrender.com/api/) 
- **Test Admin Credentials:** Gryffindor@gmail.com,  Codified#123
---


## 5. Local Setup & Installation ##

### 5.1 Setup MySQL Database ###

- **Install MySQL**
- **Import the database dump:**

  `mysql -u root -p appointments_app < appointment_booking_dump.sql`

---

### 5.2 Setup Backend (Node.js + express) ###

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

---

### 5.3 Setup Frontend (React.js) ###

- **Navigate to the frontend:**

  `cd ../appointment-booking-api`

  `npm install`
- **Run the React project:**

  `npm start`

---


## 6. Access the Application ##

- **Frontend:** http://localhost:5000
- **Backend:** http://localhost:8000


## 7. API Authentication ##

- API endpoints require a **JWT token** for access.
- Obtain a token via the **User Login** and pass it in the request header:
  ```sh
  Authorization: Bearer <your-token-here>
  ```

---


