import React, { useState, useEffect } from 'react';


function Button({text}) {
    const [buttonText, setText] = useState(text);
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setText("Вы нажали на неё " + clickCount + " раз");
        setClickCount(clickCount + 1);
        console.log(clickCount); 
    }

    useEffect(() => {
        document.title = 'Вы нажали ' + (clickCount - 1);
    }

    )

    return (
        <button onClick={handleClick}>{buttonText} {clickCount}</button>
    );
}

export default Button;