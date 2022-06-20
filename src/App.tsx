import React from "react";
import "./App.css";
import styled from "styled-components";

const Title = styled.h1`
  color: palevioletred;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>hola que ase</Title>
      </header>
    </div>
  );
}

export default App;
