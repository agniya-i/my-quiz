
import React, { FC } from "react";
import './Dashboard.less';

const Dashboard: FC = () => {

    return (
        <div className="pageWrapper">
            <div className="dashboard">
                <h1>Recent</h1>
                <div className="dashboard-section">
                    <div className="dashboard-section__top">
                        <h2 className="dashboard-section__title">Folders</h2>
                        {/* <a onClick={handleFoldersListOpen}>See All</a> */}
                    </div>
                    <div className="dashboard-section__bottom">
                        {/* <FolderList /> */}
                    </div>
                </div>
                <div className="dashboard-section">
                    <div className="dashboard-section__top">
                        <h2 className="dashboard-section__title">Sets</h2>
                        <a href="">See All</a>
                    </div>
                    <div className="dashboard-section__bottom">
                        {/* <SetsList /> */}
                    </div>
                </div>

            </div >
        </div >
    )

}

export default Dashboard;