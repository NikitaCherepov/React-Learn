import React, {useState} from 'react';
import '../css/profile.css'
import imageProfile from "../img/imageProfile.jpeg"

//Создаём меню
function Search({name, openModalName, currentTab}) {

    if (currentTab === "search") {
        return(
            <div className="profile">
                <div className="profile__short">
                    <div className="profile__short__status">Поиск</div>
                </div>
            </div>
        )
    }

}

export default Search