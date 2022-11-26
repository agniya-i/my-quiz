import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';


export const signin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) res.send(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "24h" });

        res.status(200).json({ result: existingUser, token });
    } catch (e) {
        res.status(500).json({ message: "Something went wrong" });
    }


}

export const signup = async (req, res) => {

    const { email, password, confirmPassword, username } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) res.status(400).json({ message: "User already exist" });

        if (password != confirmPassword) res.status(404).json({ message: "Passwords don't mathc" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, username })

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "24h" })

        res.status(200).json({ result, token });
    } catch (e) {
        res.status(500).json({ message: "Something went wrong" });
    }

}


