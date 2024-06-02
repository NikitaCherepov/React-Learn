import React, {useState, useEffect, useRef} from 'react';
import Header from './header'
import Menu from './menu'
import Profile from './profile'
import ModalName from './modalName'
import Search from './search'
import Test from './test'

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
        <div className="main">
        <ModalName show={showModalName} 
        onClose={closeModalName} 
        user={user}
        changeName={changeName}
        />
        <Header user={user}/>
        <div className="middleBlock">
        <Menu changeCurrentTab = {changeCurrentTab} currentTab={currentTab}/>
        <Search currentTab={currentTab}/>
        <Profile user={user} openModalName={openModalName} currentTab={currentTab}/>
        <Test currentTab={currentTab}/>
        </div>
      </div>
    )
}

export default App;