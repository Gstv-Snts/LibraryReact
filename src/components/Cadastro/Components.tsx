import React, { useState } from 'react';
import { ReactComponent as Arrowdown } from '../../images/ArrowDown.svg';
import { ReactComponent as Arrowup } from '../../images/ArrowUp.svg';

export function Textarea(props: { placeholder: string; value: string }) {
  const [focus, setFocus] = useState('hidden');
  const { placeholder, value } = props;
  return (
    <div className="h-32 w-full relative">
      <label
        htmlFor={placeholder}
        className={`${focus} z-10 bg-white absolute top-[-12px] left-[12px] px-1 text-[#3E4756] text-1318 font-roboto`}
      >
        {placeholder}
      </label>
      <textarea
        id={placeholder}
        className="resize-none border border-[#133052] rounded-md w-full h-full text-1621 p-4 text-[#133052] placeholder-[#133052] relative outline-none"
        placeholder={placeholder}
        defaultValue={value !== '' ? value : ''}
        onBlur={() => {
          setFocus('hidden');
        }}
        onFocus={() => {
          setFocus('flex');
        }}
      />
    </div>
  );
}

export function Input(props: { placeholder: string; value: string }) {
  const [focus, setFocus] = useState('hidden');
  const { placeholder, value } = props;
  return (
    <div className="h-fit w-full relative">
      <label
        htmlFor={placeholder}
        className={`${focus} z-10 bg-white absolute top-[-12px] left-[12px] px-1 text-[#3E4756] text-1318 font-roboto`}
      >
        {placeholder}
      </label>
      <input
        id={placeholder}
        className="border border-[#133052] rounded-md w-full text-1621 p-4 text-[#133052] placeholder-[#133052] relative outline-none"
        placeholder={placeholder}
        type="text"
        defaultValue={value}
        onBlur={() => {
          setFocus('hidden');
        }}
        onFocus={() => {
          setFocus('flex');
        }}
      />
    </div>
  );
}

export function Genero(props: { generos: string[]; value: string }) {
  const { generos, value } = props;
  const [focus, setFocus] = useState(false);
  const [genero, setGenero] = useState(value !== '' ? value : 'Gênero');
  const handleGeneroClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setGenero(e.currentTarget.innerText);
    setFocus(false);
  };
  return (
    <div className="h-fit w-full relative border border-[#133052] rounded-md p-4">
      <div className="flex flex-row items-center justify-between">
        <span
          className={`${
            focus ? 'flex' : 'hidden'
          } z-10 bg-white absolute top-[-12px] left-[12px] px-1 text-[#3E4756] text-1318 font-roboto`}
        >
          {}
        </span>
        <span className="text-1621  text-[#133052] placeholder-[#133052] relative outline-none">
          {genero}
        </span>
        <Arrowdown
          onClick={() => {
            setFocus(true);
          }}
          className={`${focus ? 'hidden' : 'flex'} cursor-pointer`}
        />
        <Arrowup
          onClick={() => {
            setFocus(false);
          }}
          className={`${focus ? 'flex' : 'hidden'} cursor-pointer`}
        />
      </div>
      <div
        className={`${
          focus ? 'flex' : 'hidden'
        } shadow-input absolute bottom-[70px] flex-col left-[-1px] laptop:bottom-[-241px] w-[calc(100%+2px)] bg-second rounded-md gap-2 [&>*:first-child]:bg-[#EDF4FB] [&>*:first-child]:mt-2 [&>*]:py-2 [&>*]:px-4 z-10`}
      >
        <span>Selecione</span>
        {generos.map((currentGenero) => {
          return (
            <button
              key={`${currentGenero}`}
              className="text-left cursor-pointer"
              type="button"
              onClick={handleGeneroClick}
            >
              {currentGenero}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Data(props: {
  placeholder: string | undefined;
  value: string;
}) {
  const { placeholder } = props;
  let { value } = props;
  if (value !== '') {
    const [day, month, year] = value.split('/');
    value = `${year}-${month}-${day}`;
  }
  return (
    <input
      placeholder={placeholder}
      className="border border-[#133052] rounded-md w-full text-1621 p-4 text-[#133052] placeholder-[#133052] relative outline-none "
      type="date"
      defaultValue={value !== '' ? value : ''}
    />
  );
}
