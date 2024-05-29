import React, { useEffect, useState } from 'react';

const HelloWorld = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default HelloWorld;
