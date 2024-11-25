import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Comprobantes from "./pages/Comprobantes.jsx";
import Contribuyentes from "./pages/Contribuyentes.jsx";
import Clientes from "./pages/Clientes.jsx";
import Productos from "./pages/Productos.jsx";

import Sidebar from "./components/sidebar.jsx";
import Prueba from "./components/prueba.jsx";

function App() {
  return (
    <>
      <Router>
        <div>
          <Sidebar />
          <div>
            <Routes>
              <Route path="/comprobantes" element={<Comprobantes />} />
              <Route path="/contribuyentes" element={<Contribuyentes />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/productos" element={<Productos />} />
            </Routes>
          </div>
        </div>
      </Router>
      {//<Prueba>
        
      //</Prueba>
      }
    </>
  );
}

export default App;
