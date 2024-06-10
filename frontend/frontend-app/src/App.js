// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
// import DisplayMessage from './DisplayMessage';
// import HelloWorld from './HelloWorld';
// import ReusableButton from './ReusableButton';
// import Counter from './Counter';
import ResourceList from './ResourceList';
// import ResourceForm from './ResourceForm';
import User from './User';
import ResourceFormWithFormik from './ResourceFormWithFormik';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const NotFound = () => <h1>404 - Not Found</h1>;
const Profile = () => <h1>Profile Page</h1>;
const Settings = () => <h1>Settings Page</h1>;

function App() {
    // const handleClick = () => {
    //     alert('Button clicked!');
    // };

    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                        <li><Link to="/create-resource">Create Resource</Link></li>
                        <li><Link to="/user">User</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resources" element={<ResourceList />} />
                    <Route path="/create-resource" element={<ResourceFormWithFormik />} />
                    <Route path="/user" element={<User />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
