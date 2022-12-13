
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import FolderList from "../../components/Lists/FoldersList/FoldersList";
import SetsList from "../../components/Lists/SetsList/SetsList";
import './Dashboard.less';

const Dashboard: FC = () => {
    const navigation = useNavigate();

    return (
        <div className="pageWrapper">
            <div className="dashboard">
                <h1>Recent</h1>
                <div className="dashboard-section">
                    <div className="dashboard-section__top">
                        <h2 className="dashboard-section__title">Folders</h2>
                        <button onClick={() => navigation('/folders')}>See All</button>
                    </div>
                    <div className="dashboard-section__bottom">
                        <FolderList />
                    </div>
                </div>
                <div className="dashboard-section">
                    <div className="dashboard-section__top">
                        <h2 className="dashboard-section__title">Sets</h2>
                        <button onClick={() => navigation('/sets')}>See All</button>
                    </div>
                    <div className="dashboard-section__bottom">
                        <SetsList />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dashboard;