
import React, { FC } from "react";
import './styles.less';
import SignUpForm from "../../components/SingUpForm/SignUpForm";

const Auth: FC = () => {

    return (
        <div className="auth-form-wrapper">
            <SignUpForm />
        </div >
    )

}

export default Auth;