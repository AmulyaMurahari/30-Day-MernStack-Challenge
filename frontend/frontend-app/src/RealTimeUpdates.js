// src/RealTimeUpdates.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to the WebSocket server

const RealTimeUpdates = () => {
    const [messages, setMessages] = useState([]); // Initialize as an empty array

    useEffect(() => {
        // Listen for messages from the server
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Cleanup the connection on component unmount
        return () => {
            socket.off('message');
        };
    }, []);

    return (
        <div>
            <h1>Real-Time Updates</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

export default RealTimeUpdates;
