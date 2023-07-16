import React, { useContext } from 'react';
import { ReactComponent as Emprestar } from '../../images/Emprestar.svg';
import { BookType, RentHistory } from '../../Types';
import { ReactComponent as SairIcon } from '../../images/Sair.svg';
import { CurrentBookContext } from '../../contexts/CurrentBookContext';
import { CurrentScreenContext } from '../../contexts/CurrentScreenContext';
import { ReactComponent as FilterIcon } from '../../images/Filter.svg';
import Input from '../Cadastro/Input';
import Data from '../Cadastro/Data';

export function Sair(props: { onClick: () => void }) {
  const { onClick } = props;
  return (
    <div className=" w-full flex justify-end">
      <SairIcon className="h-4 cursor-pointer" onClick={onClick} />
    </div>
  );
}

export function LeftButton(props: { isRented: boolean }) {
  const { isRented } = props;
  const { setCurrentScreen } = useContext(CurrentScreenContext);
  const { currentBook } = useContext(CurrentBookContext);
  const { isActive } = currentBook.status;
  return (
    <button
      type="button"
      className={`text-1621 text-black font-medium font-roboto flex flex-row gap-3 justify-center items-center p-4 w-full ${
        isRented && isActive ? 'bg-white' : 'bg-first'
      } ${
        isActive ? 'opacity-100' : 'opacity-50'
      } border rounded-md border-[#ADB5BD]`}
      onClick={() => {
        if (!isRented && isActive) setCurrentScreen('rent');
      }}
    >
      <Emprestar className="h-6" />
      {isRented && isActive ? 'Devolver' : 'Emprestar'}
    </button>
  );
}

export function RightButton(props: {
  type: 'editar' | 'inativar' | 'historico' | 'ativar';
  onClick: () => void;
}) {
  const { type, onClick } = props;
  let text: string;
  text = 'Histórico';
  if (type === 'editar') text = 'Editar';
  if (type === 'inativar') text = 'Inativar';
  if (type === 'ativar') text = 'Ativar';
  let style: string;
  style = 'border-[#000000] text-[#000000]';
  if (type === 'editar') style = 'border-[#167CE2] text-[#167CE2]';
  if (type === 'inativar') style = 'border-[#ED5E5E] text-[#ED5E5E]';
  if (type === 'ativar') style = 'border-[#49D749] text-[#49D749]';

  return (
    <button
      type="button"
      className={`${style} bg-white border rounded-md py-4 px-6 text-1621 font-medium font-roboto`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export function RightButtons() {
  const { currentBook } = useContext(CurrentBookContext);
  const { setCurrentScreen } = useContext(CurrentScreenContext);

  const editar = () => {};
  const historico = () => {
    setCurrentScreen('history');
  };
  const inativar = () => {
    setCurrentScreen('deactivate');
  };
  if (currentBook.status.isActive)
    return (
      <div className="flex flex-row justify-center gap-6">
        <RightButton type="editar" onClick={editar} />
        <RightButton type="inativar" onClick={inativar} />
        <RightButton type="historico" onClick={historico} />
      </div>
    );
  return (
    <div className="flex flex-row justify-center gap-6">
      <RightButton type="editar" onClick={editar} />
      <RightButton type="ativar" onClick={inativar} />
      <RightButton type="historico" onClick={historico} />
    </div>
  );
}
export function checkIsRented(withdrawalDate: string): boolean {
  const [day, month, year] = withdrawalDate.split('/');
  const currentDate: Date = new Date();
  const lastRent: Date = new Date(+year, +month, +day);
  if (lastRent > currentDate) {
    return true;
  }
  return false;
}

export function LeftButtons(props: { rentHistory: Array<RentHistory> }) {
  const { rentHistory } = props;
  if (rentHistory.length > 0)
    if (checkIsRented(rentHistory[0].withdrawalDate))
      return <LeftButton isRented />;

  return <LeftButton isRented={false} />;
}

export function LivroInfo(props: {
  title: string;
  content: string | undefined;
}) {
  const { title, content } = props;
  return (
    <div className=" text-1621 font-roboto text-[#3E4756] flex flex-col gap-2">
      <h2 className="font-medium ">{title}</h2>
      <p className=" font-light">{content}</p>
    </div>
  );
}
export function PopupContainer(props: { children: React.ReactNode }) {
  const { children } = props;
  const { setCurrentScreen } = useContext(CurrentScreenContext);
  return (
    <div className="bg-[#343a40b7] absolute left-0 top-0 w-full h-full flex justify-center pt-14 z-10 ">
      <div className="bg-white w-11/12 h-fit p-10 flex flex-col gap-6 tablet:max-w-fit">
        <Sair onClick={() => setCurrentScreen(undefined)} />
        {children}
      </div>
    </div>
  );
}

function CurrentRent() {
  const { currentBook } = useContext(CurrentBookContext);
  if (checkIsRented(currentBook.rentHistory[0].withdrawalDate)) {
    const { studentName, deliveryDate, withdrawalDate } =
      currentBook.rentHistory[0];
    return (
      <div className="flex flex-col items-center justify-center flex-wrap gap-20 bg-[#F4F4F4] p-4 font-roboto text-1621 text-[#3E4756] tablet:flex-row">
        <div className="flex flex-col">
          <h1 className="font-medium">Nome do aluno</h1>
          <span className="font-light">{studentName}</span>
        </div>
        <div>
          <h1 className="font-medium">Turma</h1>
          <span className="font-light">{currentBook.rentHistory[0].class}</span>
        </div>
        <div>
          <h1 className="font-medium">Data da retirada</h1>
          <span className="font-light">{withdrawalDate}</span>
        </div>
        <div>
          <h1 className="font-medium">Data da entrega</h1>
          <span className="font-light">{deliveryDate}</span>
        </div>
      </div>
    );
  }
  return null;
}
export function BookInfo() {
  const { currentBook } = useContext(CurrentBookContext);

  return (
    <PopupContainer>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <div className="flex flex-col justify-between">
          <img
            src={currentBook.image}
            alt={`${currentBook.tittle}img`}
            className="w-[272px] h-[390px] bg-red-600"
          />
          <LeftButtons rentHistory={currentBook.rentHistory} />
        </div>
        <div className="flex flex-col gap-6 w-[424px] ">
          <div className="flex flex-col gap-6">
            <h1 className="text-2026 font-medium font-roboto text-center">
              {currentBook.tittle}
            </h1>
            <LivroInfo title="Sinopse" content={currentBook.synopsis} />
            <LivroInfo title="Autor" content={currentBook.author} />
            <LivroInfo title="Gênero" content={currentBook.genre} />
            <LivroInfo
              title="Data de entrada"
              content={currentBook.systemEntryDate}
            />
          </div>
          <RightButtons />
        </div>
      </div>
      <CurrentRent />
    </PopupContainer>
  );
}

function BookRent() {
  return (
    <PopupContainer>
      <h1 className="text-2026 font-medium font-roboto">
        Informe os dados do aluno antes de continuar
      </h1>
      <form className="flex flex-col items-end gap-6">
        <div className="flex flex-row flex-wrap gap-6 laptop:w-[724px] laptop:flex-nowrap">
          <Input placeholder="Nome do Aluno" />
          <Input placeholder="Turma" />
        </div>
        <div className="flex flex-row flex-wrap w-full gap-6 laptop:w-[724px] laptop:flex-nowrap">
          <Data placeholder="Data da retirada" />
          <Data placeholder="Data da Entrega" />
        </div>
        <button
          type="button"
          className={`bg-first text-1621 text-black font-medium font-roboto flex flex-row gap-3 justify-center items-center p-4 w-full max-w-[272px] 'bg-first' 'opacity-100' border rounded-md border-[#ADB5BD]`}
          onClick={() => {}}
        >
          <Emprestar className="h-6" />
          Emprestar
        </button>
      </form>
    </PopupContainer>
  );
}

function BookRentsTable() {
  const { currentBook } = useContext(CurrentBookContext);
  const { rentHistory } = currentBook;
  return (
    <div className="w-full flex flex-col flex-wrap justify-center tablet:flex-row">
      <div className="flex flex-col">
        <h1 className="bg-first w-full tablet:w-[305px] py-2 px-11">Aluno</h1>
        <div className="border-b border-[#CDCDCD] py-4 px-11">
          <FilterIcon />
          <div className="w-[105px] border-b border-black mt-2" />
        </div>
        {rentHistory.map((rent) => {
          return (
            <span className="border-b border-[#CDCDCD] py-4 px-11">
              {rent.studentName}
            </span>
          );
        })}
      </div>
      <div className="flex flex-col">
        <h1 className="bg-first w-full tablet:w-[305px] py-2 px-11">Turma</h1>
        <div className="border-b border-[#CDCDCD] py-4 px-11">
          <FilterIcon />
          <div className="w-[105px] border-b border-black mt-2" />
        </div>
        {rentHistory.map((rent) => {
          return (
            <span className="border-b border-[#CDCDCD] py-4 px-11">
              {rent.class}
            </span>
          );
        })}
      </div>
      <div className="flex flex-col">
        <h1 className="bg-first w-full tablet:w-[305px] py-2 px-11">
          Data da Retirada
        </h1>
        <div className="border-b border-[#CDCDCD] py-4 px-11">
          <FilterIcon />
          <div className="w-[105px] border-b border-black mt-2" />
        </div>
        {rentHistory.map((rent) => {
          return (
            <span className="border-b border-[#CDCDCD] py-4 px-11">
              {rent.withdrawalDate}
            </span>
          );
        })}
      </div>
      <div className="flex flex-col">
        <h1 className="bg-first w-full tablet:w-[305px] py-2 px-11">
          Data da Entrega
        </h1>
        <div className="border-b border-[#CDCDCD] py-4 px-11">
          <FilterIcon />
          <div className="w-[105px] border-b border-black mt-2" />
        </div>
        {rentHistory.map((rent) => {
          return (
            <span className="border-b border-[#CDCDCD] py-4 px-11">
              {rent.deliveryDate}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function BookHistory() {
  return (
    <PopupContainer>
      <BookRentsTable />
    </PopupContainer>
  );
}
function BookDeactivate() {
  return (
    <PopupContainer>
      <div className="flex flex-col items-end gap-6">
        <h1 className="text-[#3E4756] text-2026 font-medium text-left w-full">
          Inativar Livro
        </h1>
        <textarea
          placeholder="Descrição"
          className="border rounded-md border-[#133052] p-4 text-1621 text-[#133052] w-full h-32 tablet:w-[400px] laptop:w-[724px]"
        />
        <button
          type="button"
          className=" w-fit border border-[#ED5E5E] text-[#ED5E5E] text-1621 font-medium rounded-md py-4 px-6"
        >
          Inativar
        </button>
      </div>
    </PopupContainer>
  );
}
export function Popup() {
  const { currentScreen } = useContext(CurrentScreenContext);
  if (currentScreen === 'info') {
    return <BookInfo />;
  }
  if (currentScreen === 'rent') {
    return <BookRent />;
  }
  if (currentScreen === 'history') {
    return <BookHistory />;
  }
  if (currentScreen === 'deactivate') {
    return <BookDeactivate />;
  }
  return null;
}

export function Book(props: { book: BookType }) {
  const { book } = props;
  const { image, tittle } = book;
  const { setCurrentBook } = useContext(CurrentBookContext);
  const { setCurrentScreen } = useContext(CurrentScreenContext);
  return (
    <button
      type="button"
      className="w-[196px] h-full py-6 bg-[#F4F4F4] rounded-md text-center flex flex-col gap-4 items-center justify-center"
      onClick={() => {
        setCurrentBook(book);
        setCurrentScreen('info');
      }}
    >
      <img
        src={image.toString()}
        alt={`${book.id}`}
        className="w-[108px] h-[155px]"
      />
      <span className="break-keep content-center text-1621 text-[#3E4756]">
        {tittle}
      </span>
    </button>
  );
}

export function BooksContainer(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="w-full flex justify-center">
      <div className="w-fit grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-5 gap-10">
        {children}
      </div>
    </div>
  );
}
