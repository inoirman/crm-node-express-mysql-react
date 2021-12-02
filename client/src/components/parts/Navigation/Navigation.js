import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.scss'
import {useDispatch, useSelector} from "react-redux";
import {doLogout} from "../../../store/actionsCreator";
import Button from "../../ui/Button/Button";

const Navigation = () => {

    const isAuth = useSelector(state => state.auth.auth.isAuth)
    const dispatch = useDispatch()

    const logoutClickHandler = e => {
        console.log('Logout')
        e.preventDefault()
        dispatch(doLogout())
    }

    const renderLinksInAuth = () => {
        return isAuth ?
            (
                <>
                    <li className="nav__item">
                        <NavLink to="/users" className="nav__link">Users</NavLink>
                    </li>
                    <li className="nav__item">
                        <Button  className="nav__link" onButtonClick={logoutClickHandler} title="LogOut"  />
                    </li>
                </>

            )
            : (
                <>
                    <li className="nav__item">
                        <NavLink to="/login" className="nav__link">Login</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/registration" className="nav__link">Registration</NavLink>
                    </li>
                </>
            )
    }

    return (
        <div className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/" className="nav__link">DashBoard</NavLink>
                </li>
                {renderLinksInAuth()}
            </ul>
        </div>
    )
}

export default Navigation