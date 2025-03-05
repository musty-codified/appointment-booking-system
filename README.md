# Appointment Booking System

A simple yet functional Appointment Booking System with a **Node.js & Express backend** and a **React.js frontend**, secured using **JWT-based authentication**. Users can book available time slots, while administrators can view all reservations


## 1. Live Demo
- **Frontend:** [https://appointment-booking-ft8gukdi7-mustapha-musa-s-projects.vercel.app/](https://appointment-booking-ky16itzbp-mustapha-musa-s-projects.vercel.app)
- **Backend:** [https://appointment-booking-api-ufj8.onrender.com](https://appointment-booking-api-ufj8.onrender.com/api/) 
---

## 2. Tech Stack ##

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


## 5. Local Setup & Installation ##

### 5.1 Setup MySQL Database ###

- **Install MySQL (if not installed).**
- **Import the database dump:**

  `mysql -u root -p appointments_app < appointment_booking_dump.sql`

---

### 5.2 Setup Backend (Node.js + express) ###

- **Clone the repository:**
  `git clone https://github.com/musty-codified/appointment-booking-system.git`
- **Navigate to the backend:**

  `cd appointment-booking-system/appointment-booking-api`

  `npm install`
- **Configure environment:** Open and configure `.env` with your custom configurations.

  `cp .env.example .env`
- **Start the backend server:**

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
- **Backend:** http://localhost:8000/api/


## 7. API Authentication ##

- API endpoints require a **JWT token** for access.
- Obtain a token via the **User Login** and pass it in the request header:
  ```sh
  Authorization: Bearer <your-token-here>
  ```
### 7.1 Admin Role & Login Credentials ###
You can login as an amin using the test account:
- **email**: Gryffindor@gmail.com, 
- **password**: Codified#123


---

## 8. Justification for Chosen Approach ##

### 8.1 JWT Authentication ###

- Secure, stateless authentication.
- Token is obtained via the **User Login** and passed in the request header:
  ```sh
  Authorization: Bearer <token-here>
  ```

  ### 8.2 MySQL Database ###
- MySQL is chosen for its support for complex queries.
- The database is normalized to ensure data consistency.


  ### 8.3 User Experience ###
- Ant Design provides a professional and user-friendly UI

---


## 9. Booking Conflict-Handling Logic ##
  - The system prevents double-booking of the same time slot facilitated by the MySQL query:

  ```
  SELECT * FROM appointments WHERE date = ? AND time_slot = ?;

  ```
  - If a result is found, the system rejects the booking with a 409 Conflict Response:

---


