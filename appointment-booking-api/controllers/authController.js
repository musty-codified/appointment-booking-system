
import db from '../config/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET;


//POST /api/auth/register
export const registerUer=async (req, res, next)=>{
    const {email, password} = req.body;
     if(!email && !password){
        const error = new Error("All fields are required");
        error.status = 400;
        return next(error);
        }  

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

      //Check if user already exists 
    const [existing] = await db.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      console.log(existing)
      if(existing.length > 0){
         const error = new Error("User already exists");
         error.status = 400;
         return next(error);
      };
      

      //Insert new user
     const [result] = await db.query(
        "INSERT INTO users (email, password) VALUES (?, ?)", [
            email,
            hashedPassword
            ],
      );

      res.status(201).json({
        id: result.insertId,
        email
      }
    )
    }

//POST /api/auth/login
export const authenticate=async(req, res, next)=>{
    const {email, password} = req.body;
    const [rows] = await db.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      const user = rows[0]; 
      console.log(user)
         if(!user || !(await bcrypt.compare(password, user.password))){
                const error = new Error("Invalid credentials");
                error.status = 401;
                return next(error);
            }
         const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h"});
      
      res.status(200).json({
        token,
        role: user.role
      }
    )
}




