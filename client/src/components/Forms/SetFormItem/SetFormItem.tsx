import React, { FC } from 'react';
import Input from '../../UI Components/Input/Input';
import './SetFormItem.less';

type Props = {
    index: number,
    onChange: (index: number, item: React.ChangeEvent<HTMLInputElement>) => void;
    onMoveCard: (step: number) => void;
    onRemoveCard: (index: number) => void;
}

const SetFormItem: FC<Props> = ({ index, onChange, onMoveCard, onRemoveCard }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(index, e.target);
    }

    const handleMove = (step: number) => {
        onMoveCard(step);
    }

    const handleRemove = () => {
        onRemoveCard(index)
    }

    return (
        <div className='card'>
            <div className='card__header'>
                <div className='card__options'>
                    <div onClick={() => handleMove(1)}>
                        <div className="icon" id="up">
                        </div>
                    </div>
                    <div onClick={() => handleMove(-1)}>
                        <div className="icon" id="down"></div>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <div className="icon" id="remove"></div>
                </div>
            </div>
            <div className='card__inputs'>
                <Input
                    type="text"
                    name="title"
                    id="title"
                    labelTitle=""
                    onChange={handleChange}
                    color="black"
                    placeholder="Enter Term"
                />
                <Input
                    type="text"
                    name="description"
                    id="description"
                    labelTitle=""
                    onChange={handleChange}
                    color="black"
                    placeholder="Enter Definition"
                />
            </div>
        </div>
    )

}

export default SetFormItem;