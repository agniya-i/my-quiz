import React, { useState } from "react";
import SignUpForm from "../../components/Forms/SignUpForm/SingUpForm";
import SignInForm from "../../components/Forms/SignInForm/SignInForm";
import './Auth.less';


const Auth: React.FC = () => {
    const [isSignUp, setSignUp] = useState(false);

    const handleToggleForm = () => {
        setSignUp(prevState => !prevState);
    }

    return (
        <div className="auth-form-wrapper">
            {
                isSignUp ?
                    <SignUpForm onToggleForm={handleToggleForm} /> :
                    <SignInForm onToggleForm={handleToggleForm} />
            }
        </div>
    )

}

export default Auth;