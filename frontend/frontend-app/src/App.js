import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import DisplayMessage from './DisplayMessage';
import ReusableButton from './ReusableButton';
import Counter from './Counter';
import ResourceList from './ResourceList';
import ResourceForm from './ResourceForm';

function App() {

    const handleClick = () => {
        alert("Button Clicked !");
    };

    return (
        <div className="App">
            <HelloWorld /> 
            <DisplayMessage message='Hello World !'/>
            <ReusableButton onClick={handleClick} label="Click Me" />
            <Counter />
            <ResourceList/>
            <ResourceForm/>
        </div>
    );
}

export default App;
