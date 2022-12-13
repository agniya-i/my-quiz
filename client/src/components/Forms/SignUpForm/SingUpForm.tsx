import React, { FC, useState } from 'react';
import Button from '../../UI Components/Button/Button';
import Input from '../../UI Components/Input/Input';
import { signUp } from '../../../actions/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useTypedSelector';
import './SingUpForm.less';

type Props = {
    onToggleForm: () => void;
}
type FormData = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
};

const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm: FC<Props> = ({ onToggleForm }) => {
    const [formData, setFormData] = useState<FormData>(initialState);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(signUp(formData, navigate));
    }

    return (
        <div className="form">
            <h2 className="form-title slide-right">Create your account!</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    labelTitle="Username"
                    onChange={handleChange}
                    color="primary"
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
                <Button
                    type="submit"
                    buttonText="Sign Up"
                    color="primary"
                />
            </form>
            <div className='link-btn' onClick={onToggleForm}>Have an account? Sign in!</div>
        </div>
    )

}

export default SignUpForm;