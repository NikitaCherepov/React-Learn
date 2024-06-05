import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Header from './header'
import Menu from './menu'
import Profile from '../pages/profile'
import ModalName from './modalName'
import Search from '../pages/search'
import Test from '../pages/test'

import '../css/index.css'
import './menu'

function App() {

    const [user, setUser] = useState({
        name: "Нет имени",
        email: "Не указано",
        phone: "Не указан"
    })

    const [name, setName] = useState("unnamed");
    const [currentTab, setCurrentTab] = useState("profile");
    const [showModalName, setShowModalName] = useState("");

    const changeName = (newName, newEmail, newPhone) => {
        setUser(prevState => ({
            ...prevState,
            name:newName,
            email: newEmail,
            phone: newPhone
        }))
    }

    const openModalName = () => {
        setShowModalName(true);
    }
    const closeModalName = () => {
        setShowModalName(false);
    }
    const changeCurrentTab = (tab) => {
        setCurrentTab(tab);
    }


    return (
        <Router>
        <div className="main">
        <ModalName show={showModalName} 
        onClose={closeModalName} 
        user={user}
        changeName={changeName}
        />
        <Header user={user}/>
        <div className="middleBlock">
        <Menu changeCurrentTab = {changeCurrentTab} currentTab={currentTab}/>
        <Routes>
            <Route path="/" element={<Profile user={user} openModalName={openModalName}/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="test" element={<Test/>}/>
        </Routes>

        
        {/* <Search currentTab={currentTab}/>
        <Profile user={user} openModalName={openModalName} currentTab={currentTab}/>
        <Test currentTab={currentTab}/> */}
        </div>
      </div>
      </Router>
    )
}

export default App;