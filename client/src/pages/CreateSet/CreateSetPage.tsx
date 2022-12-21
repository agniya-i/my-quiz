import React, { useEffect, useState, FC } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/UI Components/Input/Input";
import SetFormItem from "../../components/Forms/SetFormItem/SetFormItem";
import { createSet, createFolderSet } from '../../actions/sets';
import { useNavigate, useParams } from "react-router";
import { ICard } from "../../types/types";
import './CreateSetPage.less';

const initialState = {
    title: "",
    descritpion: "",
    cards: [{
        title: "",
        definition: ""
    }, {
        title: "",
        definition: ""
    }]
}
const CreateSetPage: FC = () => {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const { folderId } = useParams();


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleCardChange(index: number, elem: any) {
        const cards: any = formData.cards;
        cards[index][elem.name] = elem.value;
        setFormData({ ...formData, cards })
    }

    function handleAddCard() {
        const updatedCards = formData.cards.concat([{ title: "", definition: "" }]);
        setFormData({ ...formData, cards: updatedCards });
    }


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // dispatch(createFolderSet(folderId, formData, navigate));
        dispatch(createSet(formData));
    }

    return (
        <div className="CreateSetPage">
            <div className="page-header content-container">
                <h3>Create a new study set</h3>
                <div className="page-header__form">
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        labelTitle="Set Title"
                        onChange={handleChange}
                        color="black"
                    />
                    <Input
                        type="text"
                        name="descritpion"
                        id="descritpion"
                        labelTitle="Description"
                        onChange={handleChange}
                        color="black"
                    />
                </div>
            </div>
            <div className="cards-form content-container">
                <h3>Cards:</h3>
                <div className="cards-form__list">
                    {
                        formData.cards.map((item, index) =>
                            <SetFormItem {...item} index={index} onChange={handleCardChange} />
                        )
                    }
                </div>
                <div className="cards-form__add-btn" onClick={handleAddCard}>
                    <span>+</span>
                </div>
                <button className="cards-form__submit-btn" type="submit" onClick={handleSubmit}>Save Changes</button>
            </div>
        </div>
    )
}

export default CreateSetPage;