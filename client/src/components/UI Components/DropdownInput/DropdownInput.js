import React, { useState } from 'react';



const initialState = {
    options: []
}
export default function DropdownInput(props) {

    const [options, setOptions] = useState([{
        title: 'Algorithms'
    }, {
        title: "Health"
    }]);
    const { options } = props;

    return (
        <div>
            <div className="placeholder"></div>
            <div className="options">
                {options.map((option) => <div>{option.title}</div>)}
            </div>
        </div>
    )

}
