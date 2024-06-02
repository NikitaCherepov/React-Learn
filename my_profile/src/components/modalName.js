import React, {useState, useEffect, useRef} from 'react';
import '../css/modalName.css'
import '../css/button.css'

function ModalName({show, children, onClose, user, changeName}) {
    //Переменная для хранения информации в инпуте
    const [inputValue, setInputValue] = useState(
        {
            name: user.name,
            email: user.email,
            phone: user.phone
        }
    );

    const prevState = useRef();

    //функция, чтобы избежать закрытия окна при нажатии на контент
    const stopPropagation = (object) => {
        object.stopPropagation();
    }
    //сохранение значения инпута при его изменении
    const saveInput = (event, type) => {
        switch (type) {
            case 'name':
                setInputValue (prevState => ({
                    ...prevState,
                    name: event.target.value
                }));
                break;
            case 'email':
                setInputValue (prevState => ({
                    ...prevState,
                    email: event.target.value
                }));
                break;
            case 'phone':
                setInputValue (prevState => ({
                    ...prevState,
                    phone: event.target.value
                }))
                break;
            default:
                break;
        }
    }
    //сохранение и закрытие окна
    const saveName = () => {
        changeName(inputValue.name, inputValue.email, inputValue.phone);
        onClose();
    }


    //Функция для подсчёта количества символов
    function howMany(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '@') {
                count++
            }
        }
        return count;
    }

    //Ошибка для email
    //Слишком много знаков
    const errorTooManyDigits = howMany(inputValue.email) > 1 && <div>Слишком много @!</div>
    //Нельзя использовать такой email
    const errorWrongEmail = howMany(inputValue.email) == 1 && 
    inputValue.email.split('@')[1] !== 'email.com' 
    && inputValue.email.split('@')[1] !== 'yandex.ru' &&
    inputValue.email.split('@')[1] !== 'gmail.com' &&
    inputValue.email.split('@')[1] !== 'mail.ru' &&
    <div>Этот email не поддерживается!</div>
    //Нет email
    const errorNoEmail = howMany(inputValue.email) == 1 &&
    inputValue.email.split('@')[0].replace(/\s+/g, '') == "" &&
    <div>Некорректное значение!</div>

    //Установка и отображение ошибок
    const errorEmail = errorTooManyDigits || errorNoEmail || errorWrongEmail;

    //Использование useEffect
    /*
    useEffect(() => {
        console.log(howMany(inputValue.email));
    }, [inputValue.email])
    */


    if (show == false) {
        return null;
    }
    else {
        return(
            <div className="modalName" onClick={onClose}>
                <div className="modalName__content" onClick={stopPropagation}>
                    <div className="modalName__content__title">Изменить имя</div>
                    <input className="modalName__content__input" placeholder='Введите ваше имя'
                    onChange={(event) => saveInput(event, 'name')}
                    />
                    <input className="modalName__content__input" placeholder='Введите вашу почту'
                    onChange={(event) => saveInput(event, 'email')}
                    />

                    {errorEmail}

                    <input className="modalName__content__input" placeholder='Введите ваш телефон'
                    onChange={(event) => saveInput(event, 'phone')}
                    type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                    <button className="button modalName__content__button"
                    onClick={saveName}
                    >Сохранить</button>
                {children}
                </div>
            </div>
        )
    }
}


export default ModalName