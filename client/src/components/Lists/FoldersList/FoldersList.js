import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.less';
import TopicItem from "../../Topic Item/TopicItem";
import { getTopics } from '../../../actions/topics';



export default function FolderList() {

    const topics = useSelector((state) => state.topics);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopics());
    }, [dispatch]);

    return (

        <React.Fragment>
            <div className="sets-list">
                {
                    topics.map((topic, i) => <TopicItem key={topic._id} type='folder' topic={topic} />)
                }
            </div>
        </React.Fragment>
    );
}
