import React, { useEffect } from 'react';
import './style.less';
import TopicItem from "../../Topic Item/TopicItem";
import { getSets } from '../../../actions/sets';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { ISet } from '../../../types/types';
import NewItemCard from '../../NewItemCard/NewItemCard';
const SetsList = ()=> {
    const sets = useAppSelector((state) => state.sets);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getSets());
    }, [dispatch]);

    // const handleModalOpen = () =>{
    //     console.log('f');
    // }

    return (
        <React.Fragment>
            <div className="sets-list">
                {
                    sets && !!sets.length ?
                    sets.map(( set: ISet, i: number) => 
                        <TopicItem key={set._id} type='set' topic={set} />
                    ): 
                        <NewItemCard link={"/createSet"}/>
                    
                }
            </div>
        </React.Fragment>

    );
}

export default SetsList;