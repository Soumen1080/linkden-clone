

import User from "../models/user.model.js";
import Profile from "../models/profile.js";
import bcrypt from "bcrypt";



/**
 * Registers a new user and creates a profile.
 */
async function activeCheck(_, res) {
    try {
        res.status(200).json({ message: "Active check successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { activeCheck };