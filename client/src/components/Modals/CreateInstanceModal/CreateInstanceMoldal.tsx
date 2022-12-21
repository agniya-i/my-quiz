import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../../actions/modal';
import Input from '../../UI Components/Input/Input';
import Button from '../../UI Components/Button/Button';
import closeIcon from '../../../img/cross.png';
import { createTopic } from '../../../actions/topics';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';

import './CreateInstanceModal.less';

const initialState = {
    title: '',
    description: '',
    tags: []
}
const CreateInstanceModal = ({ formTitle }) => {
    const [data, setData] = useState(initialState)
    const dispatch = useAppDispatch();

    const handleChange = (e) => {
        const { target } = e;

        setData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    // TEMPORARY SOLUTION
    // const onSubmit = () => {

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTopic(data))
        handleClose();
    }

    const handleClose = () => {
        dispatch(hideModal());
    }

    return (
        <div className="instance-modal">
            <div className="instance-form">
                <div className="instance-form-top">
                    <h3 className="instance-form__title">{formTitle}</h3>
                    <div className="instance-form__close" onClick={handleClose}>
                        <img src={closeIcon} />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <Input
                        name="title"
                        id="title"
                        onChange={handleChange}
                        value={data.title}
                        labelTitle="Name"
                        color="light"
                    />
                    <Input
                        name="description"
                        id="description"
                        onChange={handleChange}
                        value={data.description}
                        labelTitle="Description"
                        color="light"
                    />
                    <Input
                        labelTitle="Tags"
                        color="light"
                    />
                    <Button
                        type="submit"
                        buttonText="Create"
                        color="black"
                    />
                </form>
            </div>
        </div>
    );
}

export default CreateInstanceModal;
