import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setMessage('No token found, please log in');
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const { data } = await axios.get('/api/auth/profile', config);
                setUser(data);
                setUsername(data.username);
            } catch (err) {
                console.error('Error fetching profile', err);
                // setMessage('Error fetching profile');
            }
        };

        fetchProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const { data } = await axios.put('/api/auth/profile', { username, password }, config);
            setUser(data);
            setMessage('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile', error);
            setMessage(`Error updating profile: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Profile;
