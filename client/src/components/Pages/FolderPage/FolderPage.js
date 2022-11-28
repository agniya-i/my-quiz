import React, { Component, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';
import { getTopic } from '../../../actions/topic';
import { useDispatch, useSelector } from 'react-redux';
import TopicItem from '../../Topic Item/TopicItem';
import './style.less';

export default function FolderPage() {

    const { slug } = useParams();

    const currentFolder = useSelector((state) => state.topic);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getTopic(slug));
    }, [dispatch, slug])

    function handleCreateSet() {
        history.push(`/createSet/${currentFolder._id}`);
    }
    function handleOpenFavoutrites() {
        history.push(`/favourites/${currentFolder._id}`);
    }

    return (
        <div className="FolderPage">
            <div className="page-header">
                <div className="page-header__title"> {currentFolder.title}</div>
                <div className="page-header__options">
                    <div className="page-header__options--add page-header__options-item" onClick={handleCreateSet}></div>
                    <div className="page-header__options--edit page-header__options-item"></div>
                    <div className="page-header__options--favourites  page-header__options-item" onClick={handleOpenFavoutrites}></div>
                </div>
            </div>
            <div className="sets-list">
                {currentFolder.sets &&
                    currentFolder.sets.map(set => <TopicItem key={set._id} type='set' topic={set} />)
                }
            </div>

        </div>
    );
}
