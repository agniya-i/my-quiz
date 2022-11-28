import React from "react";
import './style.less';
import classnames from "classnames";

const Button = (props) => {

    const {
        handleClick,
        buttonText,
        color
    } = props;

    const buttonClasses = classnames('button', `button--${color}`)


    return (
        <button className={buttonClasses} onClick={handleClick}>{buttonText}</button>
    )

}

export default Button;