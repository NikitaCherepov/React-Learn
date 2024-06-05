import React, {useState} from 'react';
import '../css/menu.css'
import {useLocation, useNavigate} from 'react-router-dom'

//Создаём меню
function Menu({changeCurrentTab, currentTab}) {
    const styleChosen = {
        backgroundColor:'#c2c2c2'
    }

    const setCurrentTab = (tab) => {
        changeCurrentTab(tab);
    }

    const location = useLocation();
    const navigate = useNavigate();

    return(
        <div className="menu">

            <div style = {location.pathname === "/" ? styleChosen : {}}
             className="menu__profile menu__select"
            onClick={() => navigate('/', {replace:false})}>
            Профиль</div>

            <div className="menu__search menu__select"
            style = {location.pathname === "search" ? styleChosen : {}}
            onClick={() => navigate('search', {replace:false})}>Поиск</div>

            <div className="menu__objects menu__select"
            style = {currentTab === "objects" ? styleChosen : {}}>Объекты</div>

            <div className="menu__views menu__select"
            style = {currentTab === "views" ? styleChosen : {}}>Просмотры</div>

            <div className="menu__documents menu__select"
            style = {currentTab === "documents" ? styleChosen : {}}>Документы</div>

            <div className="menu__test menu__select"
            onClick={() => navigate('test', {replace:false})}
            style = {location.pathname === "test" ? styleChosen : {}}>Для теста</div>

        </div>
    )
}

export default Menu