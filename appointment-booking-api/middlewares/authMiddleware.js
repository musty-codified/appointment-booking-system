import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

//Middleware to check claims
export const verifyToken=(req, res, next)=>{

const token = req.header('Authorization')?.split(" ")[1];
console.log(token)
if (!token) {
    const error = new Error("Access denied");
    error.status = 401;
    return next(error);
}
try {
 const decoded = jwt.verify(token, JWT_SECRET);
 req.user = decoded;
 next();
 } catch (error) {
error.status = 403;
next(error)
 }
 };

 export const isAdmin=(req, res, next)=>{
    console.log(req.user.role)
    if(req.user.role !== 'admin'){
        const error = new Error("Access denied: Admins only");
        error.status = 403;
        return next(error);
    }
 };

