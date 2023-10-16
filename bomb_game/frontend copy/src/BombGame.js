// import React, { useState, useEffect } from 'react';
// import './MyFunctionalComponent.css';
// import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
// import Grid from '@mui/material/Grid';

function BombGame() {
    
    let cells = new Array(5);
    // console.log(cells)
    for (let i=0; i<cells.length; i++){
        cells[i] = [];
        for (let a=0; a<cells.length; a++){
            cells[i][a] = null
        }
    }
    for (let i=0; i<5; i++){
        // console.log(cells)
        let x = Math.floor(Math.random()*4)
        let y = Math.floor(Math.random()*4)
        // console.log(x,y)
        cells[x][y]="💣"
        // console.log(cells)
    }
    console.log(cells)
    // const rows = cells.map((row) => (
    //     <>
    //         {/* {console.log(row)} */}
    //         {row.map((cell) => 
    //             // console.log(cell)
    //             <h3 color="cyan">{cell}</h3>
    //         )}
    //     </>
    // ))
    function userChoice(input) {
        return input === "💣" ? "bomb!": "good!"
    }
    const board = cells.map((row) =>
        <tr class="row">
            {row.map((cell) =>
                <td 
                    onClick={()=>{
                        const choice = userChoice(cell);
                        console.log(choice);
                        }} 
                    class="col col-lg-2" id="cell">
                    {cell === "💣" ? cell : "null"}
                </td>
            )}
        </tr>
    )

    return (
        
        <div className="App">
            <table id="board">{board}</table>
        </div>
    );
}

export default BombGame;






// const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("/bombgame")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);  // Log the received data
    //             setData(data);      // Set the data state
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);