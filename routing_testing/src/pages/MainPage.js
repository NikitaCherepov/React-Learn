import {useEffect} from "react"
import React, { Link, Outlet, useLocation } from 'react-router-dom';

export default function MainPage() {
    const location = useLocation()
    useEffect(() => {
        console.log("Сейчас вы находитесь здесь: ", location)
    }, [location])
    
    return(
        <>
    <nav>
        <ul>
        <li>
            <Link to="/about">Page One</Link>
        </li>
        <li>
            <Link to="/home">Page Two</Link>
        </li>
        </ul>
    </nav>
    <hr/>
    <Outlet/>
    </>
    )
}