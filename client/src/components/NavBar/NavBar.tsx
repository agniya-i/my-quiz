
import React, { FC, useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';
import { showModal } from '../../actions/modal';
import { createTopic } from '../../actions/topics';
import { createSet } from '../../actions/sets';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import useClickOutside from '../../hooks/useClickOutside';
import logo from '../../img/icons/logo+.png';
import userLogo from '../../img/icons/user-icon.png';
import './NavBar.less';

const NavBar: FC = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    const ref = useRef();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isCreateMenuOpen, toggleCreateMenu] = useState(false);

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);

            if ('exp' in decodedToken) {
                if (decodedToken?.exp * 1000 < new Date().getTime()) handleLogout();

            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const toggleMenuMode = () => {
        console.log('f');
        setMenuOpen(!isMenuOpen);
    }

    const toggleCreateMenuMode = () => {
        toggleCreateMenu(!isCreateMenuOpen);
    }

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        navigation('/');
        setUser(null);
    }
    const handleOpenFavourites = () => {
        navigation('/favourites');
    }

    const handleModalOpen = (type: string, callback) => {
        dispatch(showModal({
            modalType: 'CREATE_INSTANCE',
            modalProps: {
                formTitle: `Create new ${type}`,
                //onSubmit: callback
            }
        }))
    }

    // const handleCloseDropdown = useCallback(() => {
    //     setMenuOpen(false)
    // }, []);

    // useClickOutside(ref, handleCloseDropdown);


    // const navClasses = classNames('navigation',
    //     {
    //         'navigation--set-page': location.pathname.includes('set'),
    //         'navigation--fav-page': location.pathname.includes('favourites')
    //     }
    // )

    return (
        <>
            <div className='navigation'>
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