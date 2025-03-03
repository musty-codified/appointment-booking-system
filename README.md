# Appointment Booking System

An Appointment Booking API with a **Node.js & Express backend** and a **React.js frontend**, secured using 
**JWT-based authentication**.

## 1. Prerequisites ##
### Tech Stack ###
- **React.js**
- **Express.js**
- **Node.js**
- **Bootstrap** 
- **Styling:** Bootstrap + AntD
- **SQL Database** 
- **JWT (JSON Web Tokens)**

---

## 2. Project Structure ##

The project is divided into two folder structure:

- appointment-booking-api (Node.js & Express Backend)
- appointment-booking-ui (React.js Frontend)
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
- **Navigate to the frontend::**
  `cd ../appointment-booking-api`

  `npm install`
- **Run the React project:**

  `npm start`

---

## 4. API Documentation ##

### 4.1 User Authentication APIs ###

- (POST) [Register  User](http://localhost:8000/api/auth/register) `/api/auth/register`
- (POST) [User Login](http://localhost:8000/api/auth/login) `/api/auth/login`

### 4.2 Appointment Bookings APIs ###

- (POST) [Add a Booking](http://localhost:8000/api/appointments) `/api/appointments`
- (GET)  [Fetch all Bookings](http://localhost:8000/api/appointments)`/api/appointments?pageNumber=1&pageSize=2`

---

### 5. API Authentication

- Most API endpoints require a **JWT token** for access.
- Obtain a token via the **User Login API** and pass it in the request header:
  ```sh
  Authorization: Bearer <your-token-here>
  ```

---
