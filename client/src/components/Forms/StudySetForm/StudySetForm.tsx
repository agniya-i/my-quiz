import React, { useState } from 'react';
// import Button from '../../UI Components/Button/Button';
// import Input from '../../UI Components/Input/Input';
// import { signUp } from '../../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import CardForm from '../CardForm/CardForm';
import { createCards } from '../../../actions/cards';
import './StudySetForm.less';
import { ICard } from '../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';

const initialState = [
    {
        title: '',
        description: ''
    }
]


const StudySetForm = () => {
    const currentSet = useAppSelector(state => state.set);
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState<ICard[]>(initialState);
   

    function handleChange(index: number, item: React.ChangeEvent<HTMLInputElement>) {
        const name = (item.target as HTMLInputElement).name;
        const value = (item.target as HTMLInputElement).value;
        const newFormData = [...formData];
        newFormData[index][name] = value;

        setFormData(newFormData);
    }


    function handleAddCard() {
        let joined = formData.concat({ title: '', description: '' });
        setFormData(joined);

    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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


export default StudySetForm;