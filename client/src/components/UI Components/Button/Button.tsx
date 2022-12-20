import React from "react";
import classnames from "classnames";
import './Button.less';

type PropsButton = {
    handleClick: () => void,
    buttonText: string,
    color: string
}

const Button: React.FC<PropsButton> = ({
    handleClick,
    buttonText,
    color,
    ...props
}) => {

    const buttonClasses = classnames('button', `button--${color}`)

    return (
        <button
            className={buttonClasses}
            onClick={handleClick}
            {...props}
        >
            {buttonText}
        </button >
    )

}

export default Button;