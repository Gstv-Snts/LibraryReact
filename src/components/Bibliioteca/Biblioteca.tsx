import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Back from '../Back';
import { Book, BooksContainer, Popup } from './Components';

const bookOne = {
  id: 1,
  tittle: '1',
  author: 'Napoleon Hill',
  genre: 'Autoajuda',
  status: {
    isActive: false,
    description: 'desativado porque estragou',
  },
  image: './assets/livro01.png',
  systemEntryDate: '02/01/2020',
  synopsis:
    'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
  rentHistory: [
    {
      studentName: 'Gustavo Kunde',
      class: 'T312',
      withdrawalDate: '29/05/2022',
      deliveryDate: '19/06/2022',
    },
    {
      studentName: 'Douglas Miller',
      class: 'T127',
      withdrawalDate: '25/06/2022',
      deliveryDate: '12/07/2022',
    },
  ],
};
const bookTwo = {
  id: 1,
  tittle: '2',
  author: 'Napoleon Hill',
  genre: 'Autoajuda',
  status: {
    isActive: true,
    description: 'desativado porque estragou',
  },
  image: './assets/livro01.png',
  systemEntryDate: '02/01/2020',
  synopsis:
    'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
  rentHistory: [
    {
      studentName: 'Gustavo Kunde',
      class: 'T312',
      withdrawalDate: '29/05/2022',
      deliveryDate: '19/06/2022',
    },
    {
      studentName: 'Douglas Miller',
      class: 'T127',
      withdrawalDate: '25/06/2022',
      deliveryDate: '12/07/2022',
    },
  ],
};
const bookThree = {
  id: 1,
  tittle: '2',
  author: 'Napoleon Hill',
  genre: 'Autoajuda',
  status: {
    isActive: true,
    description: 'desativado porque estragou',
  },
  image: './assets/livro01.png',
  systemEntryDate: '02/01/2020',
  synopsis:
    'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
  rentHistory: [
    {
      studentName: 'Gustavo Kunde',
      class: 'T312',
      withdrawalDate: '29/05/2024',
      deliveryDate: '19/06/2022',
    },
    {
      studentName: 'Douglas Miller',
      class: 'T127',
      withdrawalDate: '25/06/2022',
      deliveryDate: '12/07/2022',
    },
  ],
};

function Biblioteca() {
  return (
    <div className="h-full">
      <Header />
      <Main>
        <Popup />
        <Back pageName="Home" pageText="Biblioteca" to="/" />

        <BooksContainer>
          <Book book={bookOne} />
          <Book book={bookTwo} />
          <Book book={bookThree} />
        </BooksContainer>
      </Main>
    </div>
  );
}

export default Biblioteca;
