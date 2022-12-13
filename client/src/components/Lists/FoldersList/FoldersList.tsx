import React, { useEffect } from 'react';
import './style.less';
// import TopicItem from "../../Topic Item/TopicItem";
import { getTopics } from '../../../actions/topics';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import NewItemCard from '../../NewItemCard/NewItemCard';

const FolderList = () =>{
    const topics = useAppSelector(state => state.topics);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTopics());
    }, [dispatch]);


    const handleModalOpen = () =>{
        console.log('opn');
    }
    
    return (
        <>
            <div className="sets-list">

                {
                    topics && !!topics.length ?
                        topics.map(topic => <div>{topic}</div>) :
                        <NewItemCard link={"/createFolder"}/>
                     
                    // topics.map((topic, i) => <TopicItem key={topic._id} type='folder' topic={topic} />)
                    
                }
            </div>
        </>
    );
}

export default FolderList;