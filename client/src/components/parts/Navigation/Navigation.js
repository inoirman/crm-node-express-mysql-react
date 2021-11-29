import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
    return (
        <div className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/" className="nav__link">DashBoard</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/login" className="nav__link">Login</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/registration" className="nav__link">Registration</NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Navigation