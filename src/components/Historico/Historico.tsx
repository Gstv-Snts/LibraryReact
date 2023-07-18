import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Back from '../Back';
import { ReactComponent as FilterIcon } from '../../images/Filter.svg';
import { BookType, RentHistory } from '../../Types';

function Historico() {
  const dados = JSON.parse(localStorage.getItem('dados') || '{}');
  return (
    <div>
      <Header />
      <Main>
        <Back pageName="Home" pageText="Histórico de Empréstimos" to="/" />
        <div className="w-full flex flex-col tablet:flex-row flex-wrap justify-center mt-10">
          <div className="flex flex-col w-full tablet:w-fit">
            <h1 className="bg-first w-full py-2 px-11">Aluno</h1>
            <div className="border-b border-[#CDCDCD] py-4 px-11">
              <FilterIcon />
              <div className="w-[105px] border-b border-black mt-2" />
            </div>
            {dados.books.map((book: BookType) => {
              if (book.rentHistory.length > 0) {
                return book.rentHistory.map((rent: RentHistory, i) => {
                  return (
                    <span
                      key={`${rent.studentName}${i + 0}`}
                      className="border-b border-[#CDCDCD] py-4 px-11"
                    >
                      {rent.studentName}
                    </span>
                  );
                });
              }
              return null;
            })}
          </div>
          <div className="flex flex-col w-full tablet:w-fit">
            <h1 className="bg-first w-full py-2 px-11">Turma</h1>
            <div className="border-b border-[#CDCDCD] py-4 px-11">
              <FilterIcon />
              <div className="w-[105px] border-b border-black mt-2" />
            </div>
            {dados.books.map((book: BookType) => {
              if (book.rentHistory.length > 0) {
                return book.rentHistory.map((rent: RentHistory) => {
                  return (
                    <span
                      key={rent.class}
                      className="border-b border-[#CDCDCD] py-4 px-11"
                    >
                      {rent.class}
                    </span>
                  );
                });
              }
              return null;
            })}
          </div>
          <div className="flex flex-col w-full tablet:w-fit">
            <h1 className="bg-first w-full  py-2 px-11">Livro</h1>
            <div className="border-b border-[#CDCDCD] py-4 px-11">
              <FilterIcon />
              <div className="w-[105px] border-b border-black mt-2" />
            </div>
            {dados.books.map((book: BookType) => {
              if (book.rentHistory.length > 0) {
                return book.rentHistory.map((rent, i) => {
                  return (
                    <span
                      key={`${book.tittle}${i + 0}`}
                      className="border-b border-[#CDCDCD] py-4 px-11"
                    >
                      {book.tittle}
                    </span>
                  );
                });
              }
              return null;
            })}
          </div>
          <div className="flex flex-col w-full tablet:w-fit">
            <h1 className="bg-first w-fulll py-2 px-11">Data da Retirada</h1>
            <div className="border-b border-[#CDCDCD] py-4 px-11">
              <FilterIcon />
              <div className="w-[105px] border-b border-black mt-2" />
            </div>
            {dados.books.map((book: BookType) => {
              if (book.rentHistory.length > 0) {
                return book.rentHistory.map((rent: RentHistory) => {
                  return (
                    <span
                      key={rent.withdrawalDate}
                      className="border-b border-[#CDCDCD] py-4 px-11"
                    >
                      {rent.withdrawalDate}
                    </span>
                  );
                });
              }
              return null;
            })}
          </div>
          <div className="flex flex-col w-full tablet:w-fit">
            <h1 className="bg-first w-full py-2 px-11">Data da Entrega</h1>
            <div className="border-b border-[#CDCDCD] py-4 px-11">
              <FilterIcon />
              <div className="w-[105px] border-b border-black mt-2" />
            </div>
            {dados.books.map((book: BookType) => {
              if (book.rentHistory.length > 0) {
                return book.rentHistory.map((rent: RentHistory) => {
                  return (
                    <span
                      key={rent.deliveryDate}
                      className="border-b border-[#CDCDCD] py-4 px-11"
                    >
                      {rent.deliveryDate}
                    </span>
                  );
                });
              }
              return null;
            })}
          </div>
        </div>
      </Main>
    </div>
  );
}

export default Historico;
