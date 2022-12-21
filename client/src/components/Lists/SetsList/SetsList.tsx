import { FC, useEffect } from 'react';
import './style.less';
import { getSets } from '../../../actions/sets';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { ISet } from '../../../types/types';
import NewItemCard from '../../NewItemCard/NewItemCard';
import CardListItem from '../../CardListItem/CardListItem';

const SetsCardList: FC = () => {
    const sets = useAppSelector((state) => state.sets);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getSets());
    }, [dispatch]);

    const renderCardList = () => {
        return <>
            {
                sets.map((set: ISet, i: number) => <CardListItem key={set._id} type='set' topic={set} />)
            }
            <NewItemCard type='transparent' link={"/createSet"} />
        </>
    }

    return (
        <div className="sets-list">
            {
                sets && !!sets.length ?
                    renderCardList() :
                    <NewItemCard link={"/createSet"} />
            }
        </div>
    )
}

export default SetsCardList;