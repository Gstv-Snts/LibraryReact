import React from 'react';
import Back from '../Back';
import Header from '../Header';
import Main from '../Main';
import { ReactComponent as CirclePlus } from '../../images/CirclePlus.svg';
import Input from './Input';

function Cadastro() {
  return (
    <>
      <Header />
      <Main>
        <Back pageName="Home" pageText="Cadastrar novo livro" />
        <form>
          <div className="">
            <CirclePlus />
            Capa
          </div>
          <div className="pt-28">
            <Input placeholder="Nome" />
          </div>
        </form>
      </Main>
    </>
  );
}

export default Cadastro;
