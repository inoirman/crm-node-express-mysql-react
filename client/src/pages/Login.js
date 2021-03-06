import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Field from '../components/ui/Field/Field'
import Button from '../components/ui/Button/Button'
import { doLogin } from '../store/actionsCreator'
import Error from '../components/ui/Error/Error'
import {useNavigate} from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch()
    const errors = useSelector(state => state.auth.errors)
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.auth.auth.isAuth)

    useEffect(()=>{
        if (isAuth) {
            navigate("/")
        }
    }, [isAuth])

    const [login, setLogin] = useState({ email: '', password: '' })
    const onFieldChange = e => {
        setLogin({ ...login, [e.target.id]: e.target.value })
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        dispatch(doLogin(login))
    }

    const isError = () => {
        return errors.isError
            ? <Error message={errors.message} />
            : null;
    }

    return (
        <div className="login-window">
            <form onSubmit={onFormSubmit}>
                <h2>Login Form</h2>
                {isError()}
                <Field
                    id="email"
                    label="Email (login)"
                    type="text"
                    value={login.email}
                    onFieldChange={onFieldChange}
                />
                <Field
                    id="password"
                    label="Password"
                    type="password"
                    value={login.password}
                    onFieldChange={onFieldChange}
                />
                <Button
                    type="submit"
                    title="Do Login"
                    onButtonClick={onFormSubmit}
                    className="btn-primary"
                />
            </form>
        </div>
    )
}

export default Login