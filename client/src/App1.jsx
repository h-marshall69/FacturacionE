import React, {useEffect, useState } from "react";
import axios from 'axios';
import SideBar from './components/sidebar.jsx';

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
      <>
        <SideBar></SideBar>
      </>
    );
}


export default App;