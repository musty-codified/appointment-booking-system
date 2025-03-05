# Appointment Booking System

A simple yet functional Appointment Booking System with a **Node.js & Express backend** and a **React.js frontend**, secured using **JWT-based authentication**. Users can book available time slots, while administrators can view all reservations.


## 1. Live Demo
- **Frontend:** [https://appointment-booking-ft8gukdi7-mustapha-musa-s-projects.vercel.app](https://appointment-booking-ky16itzbp-mustapha-musa-s-projects.vercel.app)
- **Backend:** [https://appointment-booking-api-ufj8.onrender.com](https://appointment-booking-api-ufj8.onrender.com/api/) 
---

## 2. Tech Stack ##

- **Backend:** Node.js, Express.js, MySQL
- **Frontend:** React.js, AntD, BootStrap
- **Authentication:** JWT

---

## 3. Project Structure ##

```
appointment-booking-system/
│──appointment-booking-api (Node.js & Express Backend)
│──appointment-booking-ui (React.js Frontend)
│──appointment_booking_dump.sql (Database Dump)
│──README.md (Project Documentation)

```
---


## 4. Local Setup & Installation ##

### 4.1 Setup MySQL Database ###

- **Install MySQL (if not installed).**
- **Import the database dump:**

  `mysql -u root -p appointments_app < appointment_booking_dump.sql`

---

### 4.2 Setup Backend ###

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

### 4.3 Setup Frontend (React.js) ###

- **Navigate to the frontend:**

  `cd ../appointment-booking-api`

  `npm install`
- **Run the React project:**

  `npm start`

- The frontend will be running on **`http://localhost:5000`**.

---

## 5. Admin Role & Login Credentials ##
You can login as an amin using the test account:
- **email**: Gryffindor@gmail.com, 
- **password**: Codified#123


---

## 6. Justification for Chosen Approach ##

### 6.1 JWT Authentication ###

- Secure, stateless authentication.
- Token is obtained via the **User Login** and passed in the request header:
  ```sh
  Authorization: Bearer <token-here>
  ```

### 6.2 MySQL Database ###
- MySQL is chosen for its support for complex queries.
- The database is normalized to ensure data consistency.

### 6.3 User Experience ###
- Ant Design provides a professional and user-friendly UI

---

## 7. Booking Conflict-Handling Logic ##
  - The system prevents double-booking of the same time slot facilitated by the MySQL query:

  ```
  SELECT * FROM appointments WHERE date = ? AND time_slot = ?;

  ```
  - If a result is found, the system rejects the booking with a 409 Conflict Response:

---


