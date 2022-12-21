
import React from 'react';
import classnames from 'classnames';
import './Input.less';

type InputProps = {
    name: string,
    type: string,
    color: string,
    labelTitle: string,
    id: string,
    errorMessage?: string,
    onChange: (str: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string
}

const Input: React.FC<InputProps> = ({
    name,
    onChange,
    type,
    color,
    labelTitle,
    id,
    errorMessage,
    ...props
}) => {


    const fieldClasses = classnames('input', { [`input--${color}`]: true });
    const labelClasses = classnames('input-label', { [`input-label--${color}`]: true });


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (typeof props.onChange === 'function') {
            onChange(e);
        }
    }

    return (
        <span>
            {
                labelTitle &&
                <label htmlFor={id} className={labelClasses}>
                    {labelTitle}
                </label>
            }
            <input
                autoComplete="off"
                id={id}
                name={name}
                onChange={handleChange}
                className={fieldClasses}
                type={type}
                {...props}
            />
            {
                errorMessage &&
                <div className="input-error">{errorMessage}</div>
            }

        </span>
    )
}

export default Input;