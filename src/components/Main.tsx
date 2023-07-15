import React from 'react';

function Main(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <main className="w-full relative border-second border-24 h-[calc(100vh-108px)] table justify-center flex-col items-center p-6">
      {children}
    </main>
  );
}

export default Main;
