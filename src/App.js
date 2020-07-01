import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frases';

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  margin-top: 4rem;
  @media (max-width: 1441px) {
    margin-top: 12rem;
  }
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 110px;
  color: #fff;
  font-family: 'Arial';
  margin: 5rem 0;
  padding: 1rem;
  font-size: 1.5rem;
  border: 2px solid black;
  border-radius: 5px;
  transition: background-size 1s ease;
  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

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
      <Boton onClick={getApi}>Obtener Frase</Boton>
    </Contenedor>
  );
};

export default App;
