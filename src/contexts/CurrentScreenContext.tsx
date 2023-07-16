import React, { ReactNode, createContext, useState } from 'react';

type ScreensType = 'info' | 'rent' | 'history' | 'deactivate' | undefined;

interface CurrentScreenContextInterface {
  currentScreen: ScreensType;
  setCurrentScreen: React.Dispatch<ScreensType>;
}

const defaultCurrentScreenContext = {
  currentScreen: undefined,
  setCurrentScreen: () => {},
} as CurrentScreenContextInterface;

export const CurrentScreenContext = createContext(defaultCurrentScreenContext);

function CurrentScreenContextProvider(props: { children: ReactNode }) {
  const { children } = props;
  const [currentScreen, setCurrentScreen] = useState<ScreensType>(undefined);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CurrentScreenContext.Provider value={{ currentScreen, setCurrentScreen }}>
      {children}
    </CurrentScreenContext.Provider>
  );
}

export default CurrentScreenContextProvider;
