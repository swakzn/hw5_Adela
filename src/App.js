import React, { useState } from 'react';
import './App.css';

export const App = () => {
    const [formData, setFormData] = useState({
        key1: 'Barbara',
        key2: 'Hepworth',
        key3: 'bhepworth@react.com',
        key4: 'love cats',
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <div className="form-container">
            <form>
                {Object.entries(formData).map(([key, value]) => (
                    <div className="form-group" key={key}>
                        <label htmlFor={key}>{key}</label>
                        <input
                            type="text"
                            id={key}
                            value={value}
                            onChange={handleInputChange}
                        />
                        <p className="form-data">{value}</p>
                    </div>
                ))}
            </form>
        </div>
    );
};
export default App