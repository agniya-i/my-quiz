import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const signIn = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) res.send(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign({ email: user.email, id: user._id }, 'test', { expiresIn: "72h" });

    return {
        user,
        token
    }
}

const signUp = async ({ email, }) => {
    const existingUser = await User.findOne({ email });

    if (existingUser) res.status(400).json({ message: "User already exist" });

    if (password !== confirmPassword) res.status(404).json({ message: "Passwords don't mathc" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({ email, password: hashedPassword, username })

    const token = jwt.sign({ email: user.email, id: user._id }, 'test', { expiresIn: "72h" });

    return {
        result,
        token
    }
}

export default {
    signIn,
    signUp
}