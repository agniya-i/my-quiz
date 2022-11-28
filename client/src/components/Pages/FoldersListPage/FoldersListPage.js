import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTopics } from '../../../actions/topics';
import './style.less';


function FoldersListPage() {

    const folders = useSelector(store => store.topics);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopics());
    }, [dispatch]);

    return (
        <div className="FoldersListPage">
            <div className="page-title">Folders</div>
            <div className="folders-list">
                {
                    folders.map(item => {
                        return <a href={`/folder/${item.slug}`} className="folders-list__item">{item.title}</a>
                    })
                }
            </div>
        </div>
    )

}

export default FoldersListPage;
