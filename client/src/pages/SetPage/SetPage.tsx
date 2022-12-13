import {FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import { Oval } from 'react-loader-spinner';
import { getSet, shuffleSet } from '../../actions/sets';
import { getFavourites } from '../../actions/favourites';
import StudySetForm from '../../components/Forms/StudySetForm/StudySetForm';
import StudySetSlider from '../../components/StudySetSlider/StudySetSlider';
import CardNavBar from '../../components/CardNavBar/CardNavBar';
import leftArrow from '../../img/icons/left-arrow.png';
import folderIcon from '../../../img/icons/folder.png';

import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';

import './SetPage.less';


const SetPage: FC = () => {

    const { id } = useParams();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentSet = useAppSelector(state => state.set);

    const [isLoading, setIsLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (id) {
            dispatch(getSet(id));
        }
    }, [dispatch, id]);


    useEffect(() => {
        if (currentSet) {
            setTimeout(() => setIsLoading(false), 1000);
        }
    }, [currentSet])


    useEffect(() => {
        dispatch(getFavourites());
    }, [dispatch]);


    function handleChangeActiveIndex(index: number) {
        setActiveIndex(index);
    }

    function handleShuffle() {
        setActiveIndex(0);
        dispatch(shuffleSet(currentSet.cards))
    }

    return (
        <div className="SetPage">
            <div className="set-header">
                <div className="set-header__back">
                    <img src={leftArrow} alt="left-icon" className="set-header__back-icon" />
                    <span onClick={() => navigate('/dashboard')}>Back To Sets</span>
                </div>
                <div className="set-header__top">
                    <div className="set-header__top-title">{currentSet && currentSet.title}</div>
                    <div className="set-header__top-folder">
                        <img src={folderIcon} alt="folder-icon" />
                        <a href={`/folder/${currentSet && currentSet.folder && currentSet.folder.slug}`}>{currentSet && currentSet.folder && currentSet.folder.title}</a>
                    </div>
                </div>
                <div className="set-header__dscr">{currentSet && currentSet.description}</div>
            </div>
            {!isLoading && <CardNavBar onShuffle={handleShuffle} />}
            {
                isLoading && <div className="set-page-loader"><Oval color="#000" height={80} width={80} /></div>
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


export default SetPage;