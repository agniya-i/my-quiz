
import React, { FC } from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Dashboard from './pages/Dashboard/Dashboard';
import Auth from './pages/Auth/Auth';

const App: FC = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path='/login' element={<Auth />} />
                    {/* <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path="/test" element={<Homepage />} />
                    <Route path='/dashboard' element={<Dashboard />} /> */}
                    {/* <Route path='/folder/:slug' component={FolderPage} />
                    <Route path='/set/:slug' component={SetPage} />
                    {/* /<Route path='/favourites' component={FavouritesPage} /> */}
                    {/* <Route path='/favourites/:folderId' component={FavouritesPage} />
                    <Route path='/folders' component={FoldersListPage} />
                    <Route path='/createSet/:folderId' component={CreateSetPage} />  */}
                    {/* </Routes> */}
                </Routes>
            </div>
        </Router>
    )
}

export default App;
