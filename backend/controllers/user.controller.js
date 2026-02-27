import User from "../models/user.model.js";
import Profile from "../models/profile.js";
import bcrypt from "bcrypt";

/**
 * Registers a new user and creates a profile.
 */
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            username: email.split("@")[0]
        });

        await newUser.save();

        const profile = new Profile({
            userId: newUser._id
        });

        await profile.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { register };