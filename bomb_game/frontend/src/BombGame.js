import React, { useState, useEffect } from 'react';
import './MyFunctionalComponent.css';

function BombGame() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/bombgame")
            .then(res => res.json())
            .then(data => {
                console.log(data);  // Log the received data
                setData(data);      // Set the data state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    

    return (
        <div className="App">
            <header className="App-header">
                BombGame
            </header>

            <div className="data-container">
                {data.map((row, rowIndex) => (
                    <div key={rowIndex} className="data-row">
                        {row.map((cell, cellIndex) => (
                            <div key={cellIndex} className="data-cell">
                                {cell}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BombGame;
