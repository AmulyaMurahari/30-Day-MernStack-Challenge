import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const[file, setFile] = useState(null);
    const[message, setMessage] = useState('');
    const[filePath, setFilePath] = useState(''); 

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try{
            const res = await axios.post('/api/auth/upload', formData, {
                headers: {
                    'Content-Type':'multipart/form-data',
                },
            });
            setFilePath(res.data.filePath);
            setMessage('File upload successfully');

        } catch(err)
        {
            setMessage('Error uploading file');
        }
    }


  return (

    <div>
        <h1>File Upload</h1>
        <form onSubmit={handleSubmit}>
            <input type='file' onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
        {message && <p>{message}</p>}
        {filePath && <img src={filePath} alt="Uploaded file" />}
    </div>
  );
};

export default FileUpload