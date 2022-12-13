import React, {FC} from 'react';
import Input from '../../UI Components/Input/Input';
import './CardForm.less';


type Props = {
    index: number, 
    onChange: (index: number, item: React.ChangeEvent<HTMLInputElement>) => void;
}   

const CardForm:FC<Props> = ({ index, onChange }) => {

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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
                name="description"
                id="description"
                labelTitle="Description"
                onChange={handleChange}
                color="black"
            />
        </div>
    )

}

export default CardForm;