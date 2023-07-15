import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Main from '../Main';
import Header from '../Header';
import { ReactComponent as Logo } from '../../images/CirclePlus.svg';
import { ReactComponent as Book } from '../../images/Book.svg';
import { ReactComponent as Pending } from '../../images/PendingAction.svg';

function Home() {
  return (
    <>
      <Header />
      <Main>
        <div className="w-full flex flex-wrap gap-10 justify-center pt-48">
          <Link to="cadastro">
            <Card Icon={Logo} text="Cadastrar novo livro" />
          </Link>
          <Link to="biblioteca">
            <Card Icon={Book} text="Biblioteca" />
          </Link>
          <Card Icon={Pending} text="Histórico de empréstimos" />
        </div>
      </Main>
    </>
  );
}

export default Home;
