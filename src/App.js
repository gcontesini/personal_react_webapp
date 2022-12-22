import React from "react";
import './App.css';

function App() {
  return ( 
    <div 
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1
        className="title"
      >
        Main Title 
      </h1>
      <table 
        width="100%"
      >
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Type</th>
            <th
              width="200%"
            >
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chocolate Cake</td>
            <td>Desert</td>
            <td>
              <a 
                href="https://www.youtube.com/watch?v=UsyrMndrICQ&list=PLOc2A52hKlB6OTtLo0UQRKfd5-Fbn9iK2&index=341"
                target="_blank">
                yt-Link
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
