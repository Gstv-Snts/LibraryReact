import React, { ReactNode, createContext, useState } from 'react';
import { BookType, emptyBook } from '../Types';

interface CurrentBookContextInterface {
  currentBook: BookType;
  setCurrentBook: React.Dispatch<BookType>;
}

const defaultCurrentBookContext = {
  currentBook: emptyBook(),
  setCurrentBook: () => {},
} as CurrentBookContextInterface;

export const CurrentBookContext = createContext(defaultCurrentBookContext);

function CurrentBookContextProvider(props: { children: ReactNode }) {
  const { children } = props;
  const [currentBook, setCurrentBook] = useState<BookType>(emptyBook());
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CurrentBookContext.Provider value={{ currentBook, setCurrentBook }}>
      {children}
    </CurrentBookContext.Provider>
  );
}

export default CurrentBookContextProvider;
