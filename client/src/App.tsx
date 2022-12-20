
import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Auth from './pages/Auth/Auth';
import NavBar from './components/NavBar/NavBar';
import CreateSetPage from './pages/CreateSet/CreateSetPage';
import SetPage from './pages/SetPage/SetPage';
import SetsList from './pages/SetsList/SetsList';
import './App.less';

const App: FC = () => {
    return (
        <Router>
            <div className="app">
                <NavBar />
                <Routes>
                    <Route path='/' element={<Auth />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/createSet' element={<CreateSetPage />} />
                    <Route path='/set/:id' element={<SetPage />} />
                    <Route path='/sets' element={<SetsList />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
