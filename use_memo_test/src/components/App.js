import React, {useState, useMemo, useEffect} from 'react';
import styled from "styled-components";
import useOne from "./useOne"
import useCounter from './useCounter'
import {Usage as CompoundComponent} from './Counter Pattern/Usage'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faMinus,
  faMinusCircle,
  faMinusSquare
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faMinus,
  faMinusCircle,
  faMinusSquare
);


function App() {

    const [test, setTest] = useState(0);
    const {counter, count} = useCounter(100);

    const consoleLogUseMemo = useMemo(() => {
        console.log(1);
    }, [test])

    useEffect(() => {
        console.log(2);
    }, [])

    useOne(() => {
        console.log(3);
    })


    return(
        <div>Hello!
            <button
            onClick={count}
            >{counter === 0 ? 'Нажми на меня!' : 'Вы нажали на кнопку ' + counter + 'раз'}</button>
            <button
            onClick={() => setTest(test + 1)}
            >{test === 0 ? 'Нажми на меня!' : 'Вы нажали на кнопку ' + test + 'раз'}</button>
            <br/>
            <CompoundComponent />
        </div>
    )
}

export default App