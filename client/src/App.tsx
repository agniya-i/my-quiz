
import React, { FC, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import NavBar from './components/NavBar/NavBar';

const App: FC = () => {
  
    // useEffect(()=>{
    //     dispatch(getFolders());
    // }, [dispatch]);
    
    return (
        <Router>
            <div className="app">
                <NavBar />
                <Routes>
                    <Route path='/login' element={<Auth />} />
                 
                    {/* <Route path='/' element={<Homepage />} />
                    <Route path="/test" element={<Homepage />} /> */}
                    <Route path='/dashboard' element={<Dashboard />} /> 
                    {/* <Route path='/folder/:slug' component={FolderPage} />
                    <Route path='/set/:slug' component={SetPage} />
                    {/* /<Route path='/favourites' component={FavouritesPage} /> */}
                    {/* <Route path='/favourites/:folderId' component={FavouritesPage} />
                    <Route path='/folders' component={FoldersListPage} />
                    <Route path='/createSet/:folderId' component={CreateSetPage} />  */}
                    
                </Routes>
            </div>
        </Router>
    )
}

export default App;
