import React, { FC, useState } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../../img/icons/google-symbol.png';
import Input from '../../UI Components/Input/Input';
import Button from '../../UI Components/Button/Button';
import { signIn } from '../../../actions/auth';
import { useAppDispatch } from '../../../hooks/useTypedSelector';
import './SignInForm.less';

// const clientId: string = (process.env.GOOGLE_LOGIN_CLIENT_ID as string);

type Props = {
    onToggleForm: () => void;
}

type FormData = {
    email: string,
    password: string
}
const initialState = {
    email: '',
    password: ''
}

const SignInForm: FC<Props> = ({ onToggleForm }) => {
    const [userData, setUserData] = useState<FormData>(initialState);

    const dispatch = useAppDispatch();
    const navigation = useNavigate();

    async function googleSuccess(res: GoogleLoginResponse | GoogleLoginResponseOffline) {
        let result, token;
        if ("profileObj" in res) { result = res.profileObj; }
        if ("tokenId" in res) { token = res.tokenId; }

        try {
            dispatch({ type: 'AUTH', data: { result, token } });

            navigation('/dashboard');

        } catch (e) {
            console.error(e);
        }
    }

    function googleFailure(err: GoogleLoginResponseOffline) {
        console.log(err);
        console.error("Google Login was unsuccessful")
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(signIn(userData, navigation));
    }


    return (
        <div className="form">
            <h2 className="form-title slide-right">Hi,<br></br> Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    labelTitle="E-mail"
                    onChange={handleChange}
                    color="primary"
                />
                <Input
                    type="password"
                    id="password"
                    name="password"
                    labelTitle="Password"
                    onChange={handleChange}
                    color="primary"
                />
                <Button
                    type="submit"
                    buttonText="Sign In"
                    color="primary"
                />
            </form>
            <GoogleLogin
                clientId={""}
                render={(rednerProps) => (
                    <button className="google-btn" onClick={rednerProps.onClick}>
                        <img alt="google-icon" src={googleLogo} /> <span>Sign In with Google</span>
                    </button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
            />
            <div className="link-btn" onClick={onToggleForm}>Create account</div>
        </div>

    )
}

export default SignInForm;