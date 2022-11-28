import React from 'react';
import Input from '../../UI Components/Input/Input';

import './style.less';



export default function CardForm(props) {

    const { index, onChange } = props;
    // const dispatch = useDispatch();
    // const history = useHistory();

    function handleChange(e) {
        onChange(index, e.target);
    }


    return (
        <div className='card'>
            <Input
                type="text"
                name="title"
                id="title"
                labelTitle="Title"
                onChange={handleChange}
                color="black"
            />
            <Input
                type="text"
                name="definition"
                id="definition"
                labelTitle="Definition"
                onChange={handleChange}
                color="black"
            />
        </div>
    )

}