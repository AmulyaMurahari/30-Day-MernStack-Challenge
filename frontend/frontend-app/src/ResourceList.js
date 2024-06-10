import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


const ResourceList = () => {

    const[resources, setResources] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const[currentPage, setCurrentPage] = useState(0);
    const[pageCount, setPageCount] = useState(0);

    //data fetching
    //This hook runs the fetchData function when the component mounts.
    //The empty array as the second argument to useEffect ensures that the effect runs only once, similar to componentDidMount in class components.

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('/api/resource', {
                    params: {
                        page: currentPage + 1,
                        limit: 10,
                    },
                });
                setResources(response.data.docs);
                setPageCount(response.data.totalPages);
                setLoading(false);
            }
            
            catch(err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

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
            {resources.map((resource) => (
                <li
                    key={resource._id}>{resource.name}
                <li>{resource.description}</li>
                <li>{resource.email}</li>
                </li>
            ))}
        </ul>
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}/>
    </div>
  );
};

export default ResourceList