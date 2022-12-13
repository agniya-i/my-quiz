
import React, {FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../img/icons/logo+.png';
import userLogo from '../../img/user_icon.png';
import decode from 'jwt-decode';
import { showModal } from '../../actions/modal';
import { createTopic } from '../../actions/topics';
import { createSet } from '../../actions/sets';
// import {  IProfile } from '../../types/types';
import './style.less';

const NavBar: FC = () =>{
    const location = useLocation();
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isMenuOpen, toggleMenu] = useState(false);
    const [isCreateMenuOpen, toggleCreateMenu] = useState(false);

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken?.exp * 1000 < new Date().getTime()) handleLogout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    function toggleCreateMenuMode() {
        toggleCreateMenu(!isCreateMenuOpen);
    }

    function handleLogout() {
        dispatch({ type: 'LOGOUT' })
        navigation('/');
        setUser(null);
    }
    function handleOpenFavourites() {
        navigation('/favourites');
    }

    function handleModalOpen(type: string, callback: () => void) {
        dispatch(showModal({
            modalType: 'CREATE_INSTANCE',
            modalProps: {
                formTitle: `Create new ${type}`,
                onSubmit: callback
            }
        }))
    }

    const navClasses = classNames('navigation',
        {
            'navigation--set-page': location.pathname.includes('Set'),
            // 'navigation--fav-page':location.pathname.includes('favourites')
        }
    )

    return (
        <>
            <div className={navClasses}>
                <div className="navigation-logo">
                    <a href='/dashboard'>
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                {user && user.result.username &&
                    <>
                        <div className="navigation-create">
                        <div className="navigation-create__placeholder" onClick={toggleCreateMenuMode}>Create</div>
                        {isCreateMenuOpen &&
                            <div className="navigation-create__options">
                                <div className="navigation-create__options-item" onClick={() => handleModalOpen('folder', createTopic)}>Folder</div>
                                <div className="navigation-create__options-item" onClick={() => handleModalOpen('set', createSet)}>Set</div>
                            </div>
                        }
                    </div>

                    <div className="navigation-options">
                        <div className="navigation-options__user" >
                            <div className="user__icon" onClick={toggleMenuMode}>
                                <img src={userLogo} alt="user-logo" />
                            </div>

                            {isMenuOpen &&
                                <div className="user__menu">
                                    <div className="user__menu-top">
                                        <div className="username">{user.result.username}</div>
                                        <div className="email">{user.result.email}</div>
                                    </div>
                                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                                </div>
                            }
                        </div>
                    </div>
                </>}
            </div>
        </>
    )
}


export default NavBar;