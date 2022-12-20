import React, { useState } from 'react';
import './DropdownInput.less';


interface Option {
    title: string
}

type DropdownInputProps = {
    options: Option[]
}

const DropdownInput: React.FC<DropdownInputProps> = ({ options }) => {

    return (
        <div>
            <div className="placeholder"></div>
            <div className="options">
                {options.map((option) => <div>{option.title}</div>)}
            </div>
        </div>
    )
}

export default DropdownInput;
