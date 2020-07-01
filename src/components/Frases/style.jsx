import styled from '@emotion/styled';

export const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  max-width: 800px;
  background: #fff;
  position: relative;
  @media (max-width: 450px) {
    padding: 1rem;
    margin-top: 1.2rem;
    h1 {
      font-size: 1rem;
      &::before {
        display: none;
      }
    }
  }
  h1 {
    text-align: center;
    margin-left: 0.6rem;
    &::before {
      content: open-quote;
      font-size: 7rem;
      position: absolute;
      top: 4%;
      left: 1%;
    }
  }
  p {
    margin-top: 0.7rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: right;
    color: #666;
    font-weight: bold;
  }
`;
