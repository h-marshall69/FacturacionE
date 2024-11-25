import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [backendData, setBackendData] = useState([]);

  const URI = "http://localhost:5000/api";  // Asegúrate de que la URL esté correcta

  const getApi = async () => {
      const res = await axios.get(URI);
      setBackendData(res.data.users);  // Guardamos el arreglo de usuarios
  };

  useEffect(() => {
    getApi();  // Llamamos a la función para obtener los datos de la API
  }, []);  // El array vacío asegura que solo se ejecute una vez al montar el componente

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {backendData.length > 0 ? (
          backendData.map((user, index) => (
            <li key={index}>{user}</li>  // Mostramos cada nombre de usuario
          ))
        ) : (
          <p>No hay usuarios disponibles</p>  // Si no hay usuarios
        )}
      </ul>
    </div>
  );
}

export default App;
