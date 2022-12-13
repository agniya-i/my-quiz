
import React, { FC, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import NavBar from './components/NavBar/NavBar';
import CreateSetPage from './components/Pages/CreateSet/CreateSetPage';
import SetPage from './components/Pages/';

const App: FC = () => {
  
    // useEffect(()=>{
    //     dispatch(getFolders());
    // }, [dispatch]);
    
    return (
        <Router>
            <div className="app">
                <NavBar />
                <Routes>
                    <Route path='/' element={<Auth />} />
                    <Route path='/dashboard' element={<Dashboard />} /> 
                    <Route path='/createSet' element={<CreateSetPage />} /> 
                    <Route path='/set/:id' element={SetPage} />

                    {/* <Route path='/' element={<Homepage />} />
                    <Route path="/test" element={<Homepage />} /> */}
                    {/* <Route path='/folder/:slug' component={FolderPage} />
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
