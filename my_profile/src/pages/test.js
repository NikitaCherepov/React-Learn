import React, {useState, useMemo} from 'react';
import '../css/test.css'

function Test({currentTab}) {

    const [myCurrentState, setMyCurrentState] = useState('');

    const myCalculation = useMemo( () => {
        return myCurrentState + 'test';
    }, [myCurrentState])

    console.log('render Home', myCalculation);

    const items = [
        { type: "name", name: 'Item1'},
        {id : 2, name: 'Item2'},
        {id: 3, name: 'Item3'},
    ]

    const [users, setUsers] = useState([
        { name: 'Андрей', age: 12 },
        { name: 'Мария', age: 22 },
        { name: 'Иван', age: 28 },
      ]);
    
    const [user, setUser] = useState(
        {name: 'Нет имени', 
        email: 'Не указана', 
        phone: 'Не указан'})
    
    const numbers = [1,2,3,4,5];

        return (
            <div>
            <ul>
                {users.map((user, index) => (
                <li key={index}>{user.name} - {user.age} лет</li>
                ))}
            </ul>
            <ul>
                {numbers.map((number) => <li key={number.toString()}>{number}</li>)}
            </ul>

            <div>Имя: {user.name} <br/>Почта: {user.email} <br/> Телефон: {user.phone}</div>
            </div>
        )
}
export default Test = React.memo(Test)