import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteSet } from '../../actions/sets';
import './style.less';



export default function TopicItem({ topic, type }) {

    const history = useHistory();
    const [isOpenOption, setIsOpenOption] = useState(false);
    const dispatch = useDispatch();

    function handleOpenOptions(e) {
        e.stopPropagation();
        setIsOpenOption(!isOpenOption);
    }

    function handleDelete(e) {
        e.stopPropagation();
        //e.stopPropagation();
        dispatch(deleteSet(topic._id));
    }

    // function handleOpenCard() {
    //     history.push(`/${type === 'set' ? 'set' : 'folder'}/${topic.slug}`);
    // }


    return (
        <div key={topic._uid} className="topic-item">
            <div className="topic-item__title"><a href={`/${type}/${topic.slug}`}>{topic.title}</a></div>

            <div className="topic-item__quantity">{topic.cards && topic.cards.length} cards</div>


            <div className="topic-item__options">
                <div className="topic-item__options-icon" onClick={handleOpenOptions}></div>
                {isOpenOption &&
                    <div className="topic-item__options-delete" onClick={handleDelete}>Delete</div>
                }
            </div>

        </div>
    );
}
