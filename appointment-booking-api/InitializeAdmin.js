import bcrypt from 'bcrypt';
import db from './config/db.js';

const initializeUsers = async () => {
    const email = "Gryffindor@gmail.com";
    const password = "Codified#123";

    try {
        console.log("Checking for admin user...");

        const [rows] = await db.query("SELECT id, email FROM users WHERE email = ?", [email]);

        if (rows.length === 0) { 
            console.log(rows[0]);
            console.log("Admin user not found. Creating now...");

            const hashedPassword = await bcrypt.hash(password, 10);

            await db.query(
                "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
                [email, hashedPassword, "admin"]
            );

            console.log("Admin user created successfully.");
        } else {
            console.log("Admin user already exists:", rows);
        }
    } catch (error) {
        console.error("Error initializing users:", error);
    }
};

initializeUsers();

export default initializeUsers;
