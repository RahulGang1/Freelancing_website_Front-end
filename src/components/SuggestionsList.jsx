import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SuggestionsList = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/projects/suggestions');
                setSuggestions(response.data);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        };

        fetchSuggestions();
    }, []);

    return (
        <div className="suggestions-list">
            <h2>Project Suggestions</h2>
            {suggestions.length > 0 ? (
                <ul>
                    {suggestions.map((suggestion) => (
                        <li key={suggestion._id}>
                            <h3>{suggestion.projectTitle}</h3>
                            <p>{suggestion.projectDescription}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No suggestions available.</p>
            )}
        </div>
    );
};

export default SuggestionsList;
