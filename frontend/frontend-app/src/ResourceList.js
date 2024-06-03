import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ResourceList = () => {

    const[resources, setResources] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await axios.get('/api/resource');
                setResources(response.data);
                setLoading(false);
            }
            catch(err){
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [] );

    if(loading)
        {
            return <div>Loading.....</div>
        }

    if(error)
        {
            return <div>Error...</div>
        }


  return (
    <div>
        <h1>ResourceList</h1>
        <ul>
            {resources.map(resource => (
                <li key ={resource._id}>{resource.name}</li>
            ))}
        </ul>
    </div>
  );
};

export default ResourceList