import React, { Link, Outlet } from 'react-router-dom';

export default function MainPage() {
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