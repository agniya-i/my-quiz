import React, { FC, useEffect } from 'react';
import { getTopics } from '../../../actions/topics';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import NewItemCard from '../../NewItemCard/NewItemCard';
import CardListItem from '../../CardListItem/CardListItem';
import './FolderList.less';

const FolderList: FC = () => {
    const topics = useAppSelector(state => state.topics);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTopics());
    }, [dispatch]);


    const handleModalOpen = () => {
        console.log('opn');
    }

    return (
        <div className="sets-list">
            <NewItemCard link={"/createFolder"} />
        </div>
    );
}

export default FolderList;