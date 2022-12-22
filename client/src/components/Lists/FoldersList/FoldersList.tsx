import React, { FC, useEffect } from 'react';
import { getTopics } from '../../../actions/topics';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import NewItemCard from '../../NewItemCard/NewItemCard';
import CardListItem from '../../CardListItem/CardListItem';
import './FolderList.less';
import { IFolder } from '../../../types/types';

const FolderList: FC = () => {
    const topics = useAppSelector(state => state.topics);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTopics());
    }, [dispatch]);


    const handleModalOpen = () => {
        console.log('opn');
    }

    const renderCardList = () => {
        return <>
            {
                topics.map((folder: IFolder, i: number) => <CardListItem key={folder._id} type='folder' topic={folder} />)
            }
            <NewItemCard type='transparent' />
        </>
    }

    return (
        <div className="sets-list">
            {
                topics && !!topics.length ?
                    renderCardList() :
                    <NewItemCard />
            }
        </div>
    );
}

export default FolderList;