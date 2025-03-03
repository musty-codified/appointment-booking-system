import express from "express";
import {bookAppointment, getAllBookings} from '../controllers/bookingController.js'
import {verifyToken, isAdmin} from '../middlewares/authMiddleware.js'

const router = express.Router();

//Route handler for POST /api/appointments
router.post('/',verifyToken, bookAppointment)

//Route handler for GET /api/appointments
router.get('/',  getAllBookings)

export default router;
