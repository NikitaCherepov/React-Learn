import React, {useState} from 'react';
import '../css/profile.css'
import imageProfile from "../img/imageProfile.jpeg"

//Создаём меню
function Profile({user, openModalName, currentTab}) {

        return(
            <div className="profile">
                <div className="profile__short">
                    <div className="profile__short__status">Агент</div>
                    <div className="profile__short__name">{user.name}</div>
                    <div className="profile__short__image"><img src={imageProfile}></img></div>
                </div>
                <div className="profile__long">
                    <div className="profile__long__title profile__long__element">Данные профиля:</div>
                    <div className="profile__long__name profile__long__element">Имя: <br/>{user.name}</div>
                    <div className="profile__long__email profile__long__element">Email:<br/>{user.email}</div>
                    <div className="profile__long__phone profile__long__element">Телефон:<br/>{user.phone}</div>
                    <div className="profile__long__address profile__long__element">Адрес:</div>
                    <div className="profile__long__buttons">
                        <button className="profile__long__buttons__button" 
                        onClick= {openModalName}>
                        ИЗМЕНИТЬ ДАННЫЕ</button>
                        <button className="profile__long__buttons__button">ИЗМЕНИТЬ ПОЧТУ</button>
                        <button className="profile__long__buttons__button">ИЗМЕНИТЬ ПАРОЛЬ</button>
                    </div>
                </div>
            </div>
        )

}

export default Profile