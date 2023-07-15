import React from 'react';
import { ReactComponent as Emprestar } from '../../images/Emprestar.svg';
import { BookType, RentHistory, Status } from '../../Types';
import { ReactComponent as SairIcon } from '../../images/Sair.svg';

export function Sair(props: { onClick: () => void }) {
  const { onClick } = props;
  return (
    <div className=" w-full flex justify-end">
      <SairIcon className="h-4 cursor-pointer" onClick={onClick} />
    </div>
  );
}

export function LeftButton(props: { isRented: boolean; status: boolean }) {
  const { isRented, status } = props;
  return (
    <button
      type="button"
      className={`text-1621 text-black font-medium font-roboto flex flex-row gap-3 justify-center items-center p-4 w-full ${
        isRented && status ? 'bg-white' : 'bg-first'
      } ${
        status ? 'opacity-100' : 'opacity-50'
      } border rounded-md border-[#ADB5BD]`}
    >
      <Emprestar className="h-6" />
      {isRented && status ? 'Devolver' : 'Emprestar'}
    </button>
  );
}

export function RightButton(props: {
  type: 'editar' | 'inativar' | 'historico' | 'ativar';
}) {
  const { type } = props;
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
      className={`${style} bg-white border text-red-500 rounded-md py-4 px-6 text-1621 font-medium font-roboto`}
    >
      {text}
    </button>
  );
}

export function RightButtons(props: { isActive: boolean }) {
  const { isActive } = props;
  if (isActive)
    return (
      <div className="flex flex-row justify-center gap-6">
        <RightButton type="editar" />
        <RightButton type="inativar" />
        <RightButton type="historico" />
      </div>
    );
  return (
    <div className="flex flex-row justify-center gap-6">
      <RightButton type="editar" />
      <RightButton type="ativar" />
      <RightButton type="historico" />
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

export function LeftButtons(props: {
  rentHistory: Array<RentHistory>;
  status: Status;
}) {
  const { rentHistory, status } = props;
  if (rentHistory.length > 0)
    if (checkIsRented(rentHistory[0].withdrawalDate))
      return <LeftButton isRented status={status.isActive} />;

  return <LeftButton isRented={false} status={status.isActive} />;
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

export function BookInfo(props: { book: BookType }) {
  const { book } = props;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <div className="flex flex-col justify-between">
        <img
          src={book?.image}
          alt={`${book?.tittle}img`}
          className="w-[272px] h-[390px]"
        />
        <LeftButtons rentHistory={book.rentHistory} status={book.status} />
      </div>
      <div className="flex flex-col gap-6 w-[424px] ">
        <div className="flex flex-col gap-6">
          <h1 className="text-2026 font-medium font-roboto text-center">
            {book?.tittle}
          </h1>
          <LivroInfo title="Sinopse" content={book.synopsis} />
          <LivroInfo title="Autor" content={book.author} />
          <LivroInfo title="Gênero" content={book.genre} />
          <LivroInfo title="Data de entrada" content={book.systemEntryDate} />
        </div>
        <RightButtons isActive={book.status.isActive} />
      </div>
    </div>
  );
}

export function Popup() {}

export function Book(props: {
  book: BookType;
  index: number;
  onClick: () => void;
}) {
  const { book, index, onClick } = props;
  const { image, tittle } = book;
  return (
    <button
      type="button"
      className="w-[196px] h-full py-6 bg-[#F4F4F4] rounded-md text-center flex flex-col gap-4 items-center justify-center"
      onClick={onClick}
    >
      <img
        src={image.toString()}
        alt={`${index}`}
        className="w-[108px] h-[155px]"
      />
      <span className="break-keep content-center text-1621 text-[#3E4756]">
        {tittle}
      </span>
    </button>
  );
}

export function BookContainer(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="w-full flex justify-center">
      <div className="w-fit grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-5 gap-10">
        {children}
      </div>
    </div>
  );
}
export function PopupContainer(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="bg-[#343a40b7] absolute left-0 top-0 w-full h-full flex justify-center pt-14 z-10 ">
      <div className="bg-white w-11/12 max-w-fit h-fit p-10 flex flex-col gap-6">
        <Sair onClick={() => console.log('qwqw')} />
        {children}
      </div>
    </div>
  );
}
