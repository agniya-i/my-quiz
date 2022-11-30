import React, { useEffect } from 'react';
import './style.less';
// import TopicItem from "../../Topic Item/TopicItem";
import { getTopics } from '../../../actions/topics';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';


const FolderList = () =>{
    const topics = useAppSelector(state => state.topics);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTopics());
    }, [dispatch]);

    return (

        <React.Fragment>
            <div className="sets-list">
                
                {
                    topics && !!topics.length ?
                        topics.map(topic => <div>{topic}</div>):
                        <div>
                            Add New Folder;
                        </div>
                    // topics.map((topic, i) => <TopicItem key={topic._id} type='folder' topic={topic} />)
                    
                }
            </div>
        </React.Fragment>
    );
}

export default FolderList;