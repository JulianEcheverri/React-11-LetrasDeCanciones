import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from 'axios';

function App() {
  const [busqueda_letra, guardarBusquedaLetra] = useState({});

  useEffect(() => {
    if (Object.keys(busqueda_letra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busqueda_letra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      // npm i axios
      const resultado = await axios(url);
      console.log(resultado);
    }
    consultarApiLetra();

  }, [busqueda_letra]);

  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
    </Fragment>
  );
}

export default App;
