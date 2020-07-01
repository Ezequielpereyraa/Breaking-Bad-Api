import React, { useState, useEffect } from 'react';
import Frase from './components/Frases';
import { Contenedor, Boton } from './style';

const App = () => {
  // state de frases
  const [fraseb, setFrase] = useState({});

  const getApi = async () => {
    const resultado = await fetch(
      'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    );
    const frase = await resultado.json();
    setFrase(frase[0]);
  };
  //Cargasr Frase
  useEffect(() => {
    getApi();
  }, []);

  return (
    <Contenedor>
      <Frase fraseb={fraseb} />
      <Boton onClick={getApi}>Get Phrase</Boton>
    </Contenedor>
  );
};

export default App;
