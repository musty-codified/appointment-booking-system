import db from "../config/db.js";


const processTimeSlot = (timeSlot)=>{
    if (timeSlot.includes("-")) {
        const timeParts = timeSlot.split("-");
        if (timeParts.length == 2) {
            const startTime = timeParts[0]; 
            const formattedTime = startTime + ":00";
            return formattedTime; 
        }
    }
}

//POST /api/appointments
export const bookAppointment = async (req, res, next) => {
  const { userId, date, timeSlot } = req.body;
  console.log(req.body);

  // Validate date format (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res
      .status(400)
      .json({ message: "Invalid date format. Expected YYYY-MM-DD." });
  }
  try {
    //Check if slot already booked
    const [existing] = await db.query(
      "SELECT * FROM appointments WHERE date = ? AND time_slot = ?",
      [date, timeSlot]
    );
    if (existing.length > 0) {
      const error = new Error("Time Slot already booked");
      error.status = 400;
      return next(error);
    }

    console.log(
      `INSERT INTO appointments (user_id, date, time_slot) VALUES (${userId}, '${date}', '${timeSlot}')`
    );

    const formattedTime = processTimeSlot(timeSlot); 

    //Insert new booking
    const [result] = await db.query(
      "INSERT INTO appointments (user_id, date, time_slot) VALUES (?, STR_TO_DATE(?,'%Y-%m-%d'), ?)",
      [userId, date, formattedTime]
    );
    res.status(201).json({
      id: result.insertId,
      userId,
      date,
      timeSlot,
    });
  } catch (error) {
    next(error);
  }
};

//GET /api/appointments (Admin only)
export const getAllBookings = async (req, res, next) => {
  try {
    const [rows] = await db.query("SELECT * FROM appointments");
    console.log(rows);
    return res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};
