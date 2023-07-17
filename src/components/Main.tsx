import React from 'react';

function Main(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <main className="w-full border-second border-24 h-fit min-h-[calc(100vh-108px)] p-6">
      {children}
    </main>
  );
}

export default Main;
