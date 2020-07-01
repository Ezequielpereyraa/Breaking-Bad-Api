import React from 'react';
import { ContenedorFrase } from './style';

const Frase = ({ fraseb }) => {
  const { quote, author } = fraseb;
  return (
    <ContenedorFrase>
      <h1>{quote}</h1>
      <p>-{author}</p>
    </ContenedorFrase>
  );
};

export default Frase;
