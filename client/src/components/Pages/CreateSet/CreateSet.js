import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../UI Components/Input/Input";
import CardForm from "../../Forms/CardForm/CardForm";
import { createFolderSet } from '../../../actions/sets';
import './style.less';
import { useHistory, useParams } from "react-router";

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
function CreateSetPage() {

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const { folderId } = useParams();


    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }

    function handleCardChange(index, elem) {
        const cards = formData.cards;
        cards[index][elem.name] = elem.value;
        setFormData({ ...formData, cards })

    }

    function handleAddCard() {
        const updatedCards = formData.cards.concat([{ title: "", definition: "" }]);
        setFormData({ ...formData, cards: updatedCards });
    }


    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createFolderSet(folderId, formData, history));
    }

    return (
        <div className="CreateSetPage">
            <div className="page-header">
                <div className="page-header__form">
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        labelTitle="Set Title: "
                        onChange={handleChange}
                        color="white"
                    />
                    <Input
                        type="text"
                        name="descritpion"
                        id="descritpion"
                        labelTitle="Description: "
                        onChange={handleChange}
                        color="white"
                    />
                </div>
            </div>
            <div className="cards-form">
                {
                    formData.cards.map((item, index) => <CardForm {...item} index={index} onChange={handleCardChange} />)
                }
                <div className="cards-form__add-btn" onClick={handleAddCard}>
                    <span>+</span>
                </div>
                <button className="cards-form__submit-btn" type="submit" onClick={handleSubmit}> Save Changes </button>
            </div>
        </div>
    )
}

export default CreateSetPage;