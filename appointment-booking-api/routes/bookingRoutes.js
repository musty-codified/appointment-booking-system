import express from "express";
import {bookAppointment, getAllBookings} from '../controllers/bookingController.js'
const router = express.Router();

//Route handler for POST /api/appointments
router.post('/', bookAppointment)

//Route handler for GET /api/appointments
router.get('/', getAllBookings)

export default router;