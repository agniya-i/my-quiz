import React, { FC,useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSet } from '../../actions/sets';
import { IFolder, ISet } from '../../types/types';
import './style.less';


type Props ={
    topic: IFolder| ISet | null,
    type: string
}

const TopicItem: FC<Props> = ({ topic, type }) => {
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


export default TopicItem;