import React, { useState } from 'react';
import Button from '../../UI Components/Button/Button';
import Input from '../../UI Components/Input/Input';
import { signUp } from '../../../actions/auth';
import { createDispatchHook, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CardForm from '../CardForm/CardForm';
import './style.less';
import { createCards } from '../../../actions/cards';


const initialState = [
    {
        title: '',
        definition: ''
    }
]

export default function StudySetForm(setId) {
    const currentSet = useSelector(state => state.set);

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();

    function handleChange(index, item) {
        const { name, value } = item;
        console.log(name, value);
        const newFormData = [...formData];
        newFormData[index][name] = value;

        setFormData(newFormData);
    }


    function handleAddCard() {
        let joined = formData.concat({ title: '', definition: '' });
        setFormData(joined);

    }

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(createCards(currentSet._id, formData));
    }

    return (
        <div className="set-form">
            <form onSubmit={handleSubmit}>
                {
                    formData.map((item, index) => <CardForm {...item} index={index} onChange={handleChange} />)
                }
                <div className="add-btn" onClick={handleAddCard}>
                    <span>+</span>
                </div>
                <button type='submit'> Save Changes </button>
            </form>
        </div>
    )

}

