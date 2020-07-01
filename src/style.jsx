import styled from '@emotion/styled';
export const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  margin-top: 4rem;
  @media (max-width: 1441px) {
    margin-top: 10rem;
  }
`;
export const Boton = styled.button`
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
  @media (max-width: 1441px) {
    font-size: 1.5rem;
    padding: 1rem;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
    padding: 0.4rem;
  }
  @media (max-width: 321px) {
    font-size: 1rem;
    padding: 0.4rem;
    margin-top: -0.2rem;
  }
  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`;
