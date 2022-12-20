import React, { FC } from 'react';
import './NewItemCard.less';
import { useNavigate } from 'react-router-dom';


type Props = {
    // onModalOpen: () => void
    link: string
}

const NewItemCard: FC<Props> = ({ link }) => {
    const navigate = useNavigate();
    
    return (
        <div className="new-item" onClick={() => navigate(link)}>
            <div>
                <span>+</span>
            </div>
        </div>
    );
}


export default NewItemCard;