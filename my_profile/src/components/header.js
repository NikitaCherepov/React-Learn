import React, {useState} from 'react';
import menuLogo from "../img/menu.png"

//Создаём Хедер
function Header({user}) {

    return(
        <div className="header">
            <div className="header__left">
                <img src={menuLogo} className="header__left__logoImg"></img>
                <div className="header__left__logoText">RENE</div>
            </div>
            <div className="header__right">
                <div className="header__right__name">{user.name}</div>
            </div>
        </div>
    )
}

export default Header