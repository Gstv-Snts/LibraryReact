import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Back from '../Back';

function Biblioteca() {
  return (
    <div>
      <Header />
      <Main>
        <Back pageName="Home" pageText="Biblioteca" to="/" />
      </Main>
    </div>
  );
}

export default Biblioteca;
