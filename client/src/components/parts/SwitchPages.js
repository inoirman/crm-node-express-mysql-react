import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashBoard from '../../pages/Dashboard'
import Login from '../../pages/Login'
import Registration from '../../pages/Registration'
import Users from "../../pages/Users";

const SwitchPages = () => {
    return (
        <Routes>
            <Route path="/" index element={<DashBoard />} />
            <Route path="/users" element={<Users />} />

            <Route path="/login" index element={<Login />} />
            <Route path="/registration" index element={<Registration />} />
        </Routes>
    )
}

export default SwitchPages