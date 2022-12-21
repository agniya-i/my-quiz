import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import './NewItemCard.less';

type Props = {
    // onModalOpen: () => void
    link: string
    type?: string
}

const NewItemCard: FC<Props> = ({ link, type = 'default' }) => {
    const navigate = useNavigate();
    const itemClass = classNames('new-item', {
        'new-item--transparent': type === 'transparent'
    });

    return (
        <div className={itemClass} onClick={() => navigate(link)}>
            <div>
                <span>+</span>
            </div>
        </div>
    );
}


export default NewItemCard;