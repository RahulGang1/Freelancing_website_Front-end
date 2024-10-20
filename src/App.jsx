import React from 'react';
import ProjectForm from './components/ProjectForm';
import SuggestionsList from './components/SuggestionsList';
import Home from './components/Home';
import './App.css';

const App = () => {
    return (
        <div className="app">
            {/* <Home/> */}
            <ProjectForm />
            <SuggestionsList />
        </div>
    );
};

export default App;
