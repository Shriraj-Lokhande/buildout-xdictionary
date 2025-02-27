import React, { useState } from 'react';

const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
];

const Dictionary = () => {
    const [dictionary] = useState(initialDictionary);
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState('');

    const handleSearch = () => {
        const word = searchTerm.trim().toLowerCase();
        const found = dictionary.find(entry => entry.word.toLowerCase() === word);
        if (found) {
            setResult(found.meaning);
        } else {
            setResult("Word not found in the dictionary.");
        }
    };

    return (
        <div className="dictionary">
            <div>
            <h1>Dictionary App</h1>
            </div>
            <div>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search for a word..."
            />
            <button onClick={handleSearch} >
                Search
            </button>
            </div>
            <h4>Definition:</h4>
            <div>
            <p >
                {result}
            </p>
            </div>
        </div>
    );
};

export default Dictionary;
