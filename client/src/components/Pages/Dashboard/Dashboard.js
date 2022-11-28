import React, { Component, useEffect, useState } from 'react';
import './style.less';
import SetsList from '../../Lists/SetsList/SetsList';
import FolderList from '../../Lists/FoldersList/FoldersList';
import { useHistory } from 'react-router';


export default function Dashboard() {

    const history = useHistory();
    function handleFoldersListOpen() {
        history.push('/folders');
    }
    return (
        <div className="page-wrapper">
            <div className="dashboard">
                <h1 className="dashboard-title">Recent</h1>
                <div className="dashboard-section">
                    <div className="dashboard-section__top">
                        <h2 className="dashboard-section__title">Folders</h2>
                        <a onClick={handleFoldersListOpen}>See All</a>
                    </div>
                    <div className="dashboard-section__bottom">
                        <FolderList />
                    </div>
                </div>
                <div className="dashboard-section">
                    <div className="dashboard-section__top">
                        <h2 className="dashboard-section__title">Sets</h2>
                        <a href="">See All</a>
                    </div>
                    <div className="dashboard-section__bottom">
                        <SetsList />
                    </div>
                </div>

            </div>
        </div >
    );
}
