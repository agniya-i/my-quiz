import React, { useState } from "react";
import SignUpForm from "../Forms/SignUpForm/SingUpForm";
import SignInForm from "../Forms/SignInForm/SignInForm";
import './style.less';


const Auth: React.FC = () => {
    const [isSignUp, setSignUp] = useState(false);

    function handleOpenSingUp() {
        setSignUp(true);
    }

    return (
        <div className="auth-form-wrapper">
            {/* <SignUpForm /> */}
            {
                isSignUp ?
                    <SignUpForm /> :
                    <SignInForm onOpenSingUp={handleOpenSingUp} />
            }
        </div>
    )

}

export default Auth;