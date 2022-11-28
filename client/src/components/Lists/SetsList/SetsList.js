import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.less';
import TopicItem from "../../Topic Item/TopicItem";
import { getSets } from '../../../actions/sets';
import { showModal } from '../../../actions/modal';
import { createSet } from '../../../actions/sets';

export default function SetsList() {

    const sets = useSelector((state) => state.sets);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSets());
    }, [dispatch]);


    return (
        <React.Fragment>
            <div className="sets-list">
                {
                    sets.map((set, i) => <TopicItem key={set._id} type='set' topic={set} />)
                }
            </div>
        </React.Fragment>

    );
}
