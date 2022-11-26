
import React, { useState, useRef, useEffect } from 'react';
// import Button from '../../UI Components/Button/Button';
import Input from '../UI Components/Input/Input';
// import { signUp } from '../../../actions/auth';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import './style.less';

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z](?=.*[0-9])(?=.*[!@#$%])).{8,24}$/;

const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [formData, setFormData] = useState(initialState);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        //dispatch(signUp(formData, history));
    }

    return (
        <React.Fragment>
            <h2 className="form-title slide-right">Create your account!</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    labelTitle="Username"
                    onChange={handleChange}
                    color="primary"
                // ref={userRef}
                />
                <Input
                    type="text"
                    name="email"
                    id="email"
                    labelTitle="E-mail"
                    onChange={handleChange}
                    color="primary"
                />

                <Input
                    type="text"
                    name="password"
                    id="password"
                    labelTitle="Password"
                    onChange={handleChange}
                    color="primary"
                />
                <Input
                    type="text"
                    name="confirmPassword"
                    id="confirmPassword"
                    labelTitle="Confirm password"
                    onChange={handleChange}
                    color="primary"
                />
                {/* <Button
                    type="submit"
                    buttonText="Sign Up"
                    color="primary"
                /> */}
            </form>
        </React.Fragment>
    )

}

export default SignUpForm;