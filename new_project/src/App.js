import React, { useState, useEffect, useRef } from 'react';
import Header from './components/header'


function chat(message) {
    console.log(message);
  }
  
//Создание состояний
function App() {
    const [name, setName] = useState("");
    const [currentInput, setCurrentInput] = useState("");

    const prevState = useRef();

    const inputClick = () => {
        console.log("1");
    };

    const changeName = () => {
        setName(currentInput);
    };

    const saveInput = (event) => {
        setCurrentInput(event.target.value);
    };

    useEffect(() => {
        if (prevState.current !== name) {
            console.log("Имя изменилось с " + prevState.current + " на " + name)
            prevState.current = name;
        }
    })

    return (
        <div className="card">
            <Header title="Это название и шапка" />
            <h1>Ваша личная карта</h1>
            <input placeholder={name} onClick={inputClick} onChange={saveInput} />
            <button onClick={changeName}>Сохранить</button>
            <p>{name === "" ? "У вас нет имени!" : "У вас есть имя: " + name}</p>
        </div>
    );
}

  export default App