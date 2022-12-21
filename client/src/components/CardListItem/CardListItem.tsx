import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSet } from '../../actions/sets';
import { IFolder, ISet } from '../../types/types';
import './CardListItem.less';

type Props = {
    topic: IFolder | ISet,
    type: string
}

const CardListItem: FC<Props> = ({ topic, type }) => {

    const [isOpenOption, setIsOpenOption] = useState(false);
    const dispatch = useDispatch();

    function handleOpenOptions(e) {
        e.stopPropagation();
        setIsOpenOption(!isOpenOption);
    }

    function handleDelete(e) {
        e.stopPropagation();
        dispatch(deleteSet(topic._id));
    }

    // function handleOpenCard() {
    //     history.push(`/${type === 'set' ? 'set' : 'folder'}/${topic.slug}`);
    // }

    return (
        <div key={topic._id} className="topic-item">
            <div className="topic-item__title"><a href={`/${type}/${topic._id}`}>{topic.title} </a></div>
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

export default CardListItem;