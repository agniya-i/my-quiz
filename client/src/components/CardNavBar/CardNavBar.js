import React from 'react';
import fullScreenIcon from '../../img/icons/full-screen.png';
import shuffleIcon from '../../img/icons/shuffle.png';
import repeatIcon from '../../img/icons/cancel.png';
import './style.less';


export default function CardNavBar(props) {

    const { onShuffle } = props;

    //
    return (
        <div className="card-nav-bar">
            <ul className="card-nav-bar__top">

                <li className="nav-bar-item">
                    <button onClick={onShuffle}><span className="nav-bar-item__img"><img src={shuffleIcon} /></span><span>Shuffle</span></button>
                </li>
                <li className="nav-bar-item">
                    <button><span className="nav-bar-item__img"><img src={fullScreenIcon} /></span><span>Full Screen</span></button>
                </li>
                <li className="nav-bar-item">
                    <button><span className="nav-bar-item__img"><img src={repeatIcon} /></span><span>Go To Repeat List</span></button>
                </li>
            </ul>
            <div className="divider"></div>
            <h3>Settings</h3>
            <ul className="card-nav-bar__settings">
                <li><button><span><img src="" /></span><span>Edit</span></button></li>
                <li><button><span><img src="" /></span><span>Share</span></button></li>
                <li><button><span><img src="" /></span><span>Add To Folder</span></button></li>
                <li><button><span><img src="" /></span><span>Delete</span></button></li>
            </ul>
        </div>
    )
}