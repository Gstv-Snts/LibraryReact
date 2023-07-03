import React from "react";

function Main(props: { children: React.ReactNode }) {
  return (
    <main className="w-full border-second border-24 table h-[calc(100%-108px)]">
      {props.children}
    </main>
  );
}

export default Main;
