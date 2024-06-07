import React, {useState, useEffect} from 'react';
import axios from 'axios';


const ResourceList = () => {

    const[resources, setResources] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(true);

    //data fetching
    //This hook runs the fetchData function when the component mounts.
    //The empty array as the second argument to useEffect ensures that the effect runs only once, similar to componentDidMount in class components.

    useEffect(() => {
        const fetchData = async () => {
            try{

                const response = await axios.get('/api/resource');
                setResources(response.data);
                setLoading(false);
            }
            catch(err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if(loading)
        {
            return <div>Loading....</div>
        }

    if(error)
        {
            return <div>Error...{error}</div>
        }


  return (
    <div>
        <h1>Resources List</h1>
        <ul>
            {resources.map(resource => (
                <li
                    key={resources._id}>{resources.name}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default ResourceList