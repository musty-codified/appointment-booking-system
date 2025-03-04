# Appointment Booking System

Appointment Booking API with a **Node.js & Express backend** and a **React.js frontend**, secured using 
**JWT-based authentication**.

## 1. Prerequisites ##
### Tech Stack ###

- **Node.js**
- **Express.js**
- **React.js**
- **Bootstrap** 
- **Styling:** Bootstrap & AntD
- **MySQL** 
- **JWT**

---

## 2. Project Structure ##

The project is divided into two folder structure:

- appointment-booking-api (Node.js & Express Backend)
- appointment-booking-ui (React.js Frontend)
- appointment_booking_dump.sql
- README.md

---

## 3 Setup & Installation ##

### 3.1 Setup the Backend ###

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

### 3.2 Setup the Frontend ###
- **Navigate to the frontend:**
  `cd ../appointment-booking-api`

  `npm install`
- **Run the React project:**

  `npm start`

---

## 4. Setup MySQL Database ##

- **Install MySQL**
- **Import the database dump:**
  `mysql -u root -p bookings-db < appointment_booking_dump.sql`

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
