import React, { useContext } from 'react';
import Back from '../Back';
import Header from '../Header';
import Main from '../Main';
import { ReactComponent as CirclePlus } from '../../images/CirclePlus.svg';
import { Data, Genero, Input, Textarea } from '../Cadastro/Components';
import { CurrentBookContext } from '../../contexts/CurrentBookContext';

function Editar() {
  const { currentBook } = useContext(CurrentBookContext);
  return (
    <>
      <Header />
      <Main>
        <Back pageName="Biblioteca" pageText="Editar livro" to="/biblioteca" />
        <div className="w-full flex justify-center">
          <form className="flex flex-col gap-8 w-11/12 laptop:w-[944px] ">
            <div className="w-full mt-28 m-0 flex flex-col items-center justify-center gap-12 laptop:flex-row ">
              <div
                className={` w-11/12 max-w-[172px] h-52 relative border-dashed border-2 border-first flex flex-row items-center justify-center text-first`}
              >
                <input
                  type="file"
                  alt="file"
                  className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
                  src={currentBook.image}
                />
                <CirclePlus className="h-6 fill-first" />
                Capa
              </div>
              <div className="flex flex-col gap-6 w-full max-w-[350px]">
                <Input placeholder="Título" value={currentBook.tittle} />
                <Textarea placeholder="Sinopse" value={currentBook.synopsis} />
              </div>
              <div className="flex flex-col gap-6 w-full max-w-[350px]">
                <Input placeholder="Autor" value={currentBook.author} />
                <Genero
                  generos={['Fantasia', 'Ação e Aventura', 'Horror', 'Romance']}
                  value={currentBook.genre}
                />
                <Data
                  placeholder="Data de entrada"
                  value={currentBook.systemEntryDate}
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-6 laptop:justify-end">
              <button
                type="button"
                className="text-1618 text-black font-roboto font-medium w-11/12 max-w-[143px] border border-[#133052] rounded-md bg-white py-4 px-7"
              >
                CANCELAR
              </button>
              <button
                type="button"
                className="text-1618 text-black font-roboto font-medium w-11/12 max-w-[143px] border border-first rounded-md bg-first py-4 px-7"
              >
                SALVAR
              </button>
            </div>
          </form>
        </div>
      </Main>
    </>
  );
}

export default Editar;
