import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { getSet, shuffleSet } from '../../../actions/sets';

import { useDispatch, useSelector } from 'react-redux';
import StudySetForm from '../../Forms/StudySetForm/StudySetForm';
import StudySetSlider from '../../StudySetSlider/StudySetSlider';
import leftArrow from '../../../img/icons/left-arrow.png';

import Loader from 'react-loader-spinner';
import CardNavBar from '../../CardNavBar/CardNavBar';
import './style.less';
import { getFavourites } from '../../../actions/favourites';
import folderIcon from '../../../img/icons/folder.png';

export default function SetPage() {

    const { slug } = useParams();

    const history = useHistory();
    const dispatch = useDispatch();

    const currentSet = useSelector(state => state.set);

    const [isLoading, setIsLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (slug) {
            dispatch(getSet(slug));
        }
    }, [dispatch, slug]);



    useEffect(() => {
        if (currentSet) {
            setTimeout(() => setIsLoading(false), 1000);
        }
    }, [currentSet])


    useEffect(() => {
        dispatch(getFavourites());
    }, [dispatch]);

    function handleBack() {
        history.push('/dashboard');
    }


    function handleChangeActiveIndex(index) {
        setActiveIndex(index);
    }

    function handleShuffle() {
        setActiveIndex(0);
        dispatch(shuffleSet(currentSet.cards))
    }

    console.log('FOLDER', currentSet.folder);

    return (
        <div className="SetPage">

            <div className="set-header">
                <div className="set-header__back">
                    <img src={leftArrow} className="set-header__back-icon" />
                    <span onClick={handleBack}>Back To Sets</span>
                </div>
                <div className="set-header__top">
                    <div className="set-header__top-title">{currentSet && currentSet.title}</div>
                    <div className="set-header__top-folder">
                        <img src={folderIcon} />
                        <a href={`/folder/${currentSet && currentSet.folder && currentSet.folder.slug}`}>{currentSet && currentSet.folder && currentSet.folder.title}</a>
                    </div>
                </div>
                <div className="set-header__dscr">{currentSet && currentSet.description}</div>
            </div>
            {!isLoading && <CardNavBar onShuffle={handleShuffle} />}
            {
                isLoading && <div className="set-page-loader"><Loader type="Hearts" color="#000" height={80} width={80} /></div>
            }
            {
                !isLoading && currentSet && currentSet.cards && !currentSet.cards.length && <StudySetForm />
            }
            {
                !isLoading && currentSet && currentSet.cards && currentSet.cards.length && <StudySetSlider pageType="setPage" activeIndex={activeIndex} onChangeActiveIndex={handleChangeActiveIndex} folder={currentSet.folder} cards={currentSet.cards} />
            }

        </div>
    );
}
