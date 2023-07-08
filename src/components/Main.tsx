import React from 'react';

function Main(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <main className="w-full border-second border-24 h-[calc(100%-108px)] table justify-center flex-col items-center">
      {children}
    </main>
  );
}

export default Main;
