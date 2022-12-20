import userService from '../services/user.service.js';

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { user, token } = await userService.signIn({ email, password });

        res.status(200).json({ result: user, token });
    } catch (e) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const signUp = async (req, res) => {

    const { email, password, confirmPassword, username } = req.body;

    try {
        const { result, token } = await userService.signUp({ email, password, confirmPassword, username });

        res.status(200).json({ result, token });
    } catch (e) {
        res.status(500).json({ message: "Something went wrong" });
    }
}


