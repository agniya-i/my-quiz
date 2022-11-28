
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../../../actions/favourites';
import StudySetSlider from '../../StudySetSlider/StudySetSlider';
import leftArrow from '../../../img/icons/left-arrow.png';
import '../SetPage/style.less';
import { useHistory, useParams } from 'react-router';


export default function FavouritesPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const { folderId } = useParams();
    const history = useHistory();
    const favourites = useSelector(state => state.favourites);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavourites(folderId));
    }, [dispatch]);


    function handleChangeActiveIndex(index) {
        setActiveIndex(index);
    }

    function handleBack() {
        history.push('/dashboard');
    }


    return (
        <div className="SetPage page-wrapper">
            <div className="set-header">
                <div className="set-header__back">

                    <span onClick={handleBack}>Back To Sets</span>
                </div>

                <div class="set-header__top"><div class="set-header__top-title">Favourites</div></div>

            </div>
            <h3></h3>
            {

                favourites && favourites.length && <StudySetSlider pageType="favourites" activeIndex={activeIndex} onChangeActiveIndex={handleChangeActiveIndex} cards={favourites} />

            }
        </div>
    )
}