// src/User.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const User = () => (
    <div>
        <h1>User Page</h1>
        <ul>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="settings">Settings</Link></li>
        </ul>
        <Outlet />
    </div>
);

export default User;
