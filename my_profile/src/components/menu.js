import React, {useState} from 'react';
import '../css/menu.css'

//Создаём меню
function Menu({changeCurrentTab, currentTab}) {
    const styleChosen = {
        backgroundColor:'#c2c2c2'
    }

    const setCurrentTab = (tab) => {
        changeCurrentTab(tab);
    }

    return(
        <div className="menu">

            <div style = {currentTab === "profile" ? styleChosen : {}}
             className="menu__profile menu__select"
            onClick={() => setCurrentTab("profile")
            }>Профиль</div>

            <div className="menu__search menu__select"
            style = {currentTab === "search" ? styleChosen : {}}
            onClick={() => setCurrentTab("search")}>Поиск</div>
            <div className="menu__objects menu__select"
            style = {currentTab === "objects" ? styleChosen : {}}>Объекты</div>
            <div className="menu__views menu__select"
            style = {currentTab === "views" ? styleChosen : {}}>Просмотры</div>
            <div className="menu__documents menu__select"
            style = {currentTab === "documents" ? styleChosen : {}}>Документы</div>
            <div className="menu__test menu__select"
            onClick={() => setCurrentTab("test")}
            style = {currentTab === "test" ? styleChosen : {}}>Для теста</div>
        </div>
    )
}

export default Menu