import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import favIcon from '../../img/icons/fav.png';
import repeatIcon from '../../img/icons/cancel.png';
import favSelectedIcon from "../../img/icons/fav-selected.png";
import repeatSelectedIcon from "../../img/icons/error.png"
import { updateFavourites } from '../../actions/favourites';
import { updateRepeatList } from '../../actions/sets.js'
import { useDispatch, useSelector } from 'react-redux';

import './StudyCard.less';

const StudyCard = ({
    index,
    activeIndex,
    card,
    pageType,
    folder
}) => {

    const dispatch = useDispatch();

    const currentSet = useSelector(state => state.set);

    const classItem = classNames('cards-slider__wrapper', {
        ['cards-slider__wrapper--active']: index === activeIndex
    })

    const [isActiveSide, setIsActiveSide] = useState(true);
    const [isInFavourites, setIsInFavourites] = useState(false);
    const [isInRepeatList, setIsInRepeatList] = useState(false);
    const favourites = useSelector(state => state.favourites);

    useEffect(() => {
        const isFavourites = favourites.indexOf(card._id) > -1 ? false : true;
        setIsInFavourites(isFavourites);

    }, [favourites]);

    useEffect(() => {
        if (pageType === 'setPage') {
            const isRepeate = currentSet.repeatList.indexOf(card._id) > -1 ? false : true;
            setIsInRepeatList(isRepeate);
        }


    }, [currentSet]);

    function handleSwitchSide(e) {
        setIsActiveSide(!isActiveSide);
    }

    function handleAddToFavourite(e) {
        dispatch(updateFavourites(card._id, folder._id));
    }

    function handleAddToRepeat() {
        dispatch(updateRepeatList(card._id, currentSet._id));
    }

    return (
        <div className={classItem}>
            <div onClick={handleSwitchSide} className="cards-slider__item">
                <div className={`cards-slider__item-title ${isActiveSide ? "cards-slider__item--active" : ""}`}>
                    {card.title}
                </div>
                <div className={`cards-slider__item-dscr ${isActiveSide ? "" : "cards-slider__item--active"} `}>
                    {card.definition}
                </div>
            </div>
            <div className="cards-actions">
                <div className="cards-actions--fav" onClick={handleAddToFavourite}>
                    <img src={isInFavourites ? favIcon : favSelectedIcon} />
                </div>
                {pageType === 'setPage' ?
                    <div className="cards-actions--repeat" onClick={handleAddToRepeat}>
                        <img src={isInRepeatList ? repeatIcon : repeatSelectedIcon} /></div> : null}
            </div>

        </div >
    )
}

export default StudyCard;