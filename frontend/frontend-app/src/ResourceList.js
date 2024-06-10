import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import '../src/App.css';


const ResourceList = () => {

    const[resources, setResources] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const[currentPage, setCurrentPage] = useState(0);
    const[pageCount, setPageCount] = useState(0);
    const[sortConfig, setSortConfig] = useState({key: 'name', direction:'asc'});

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
                        sortBy: sortConfig.key,
                        order: sortConfig.direction,
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
    }, [currentPage, sortConfig]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction});
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
        <table className="center-table">
            <thead>
                <tr>
                    <th onClick={() => handleSort('name')}>Name</th>
                    <th onClick={() => handleSort('description')}>Description</th>
                    <th onClick={() => handleSort('email')}>Email</th>
                </tr>
            </thead>
            <tbody>
            {resources.map((resource) => (
                        <tr key={resource._id}>
                            <td>{resource.name}</td>
                            <td>{resource.description}</td>
                            <td>{resource.email}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    
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