import React, { useState } from 'react';

function Input(props: { placeholder: string }) {
  const [focus, setFocus] = useState('hidden');
  const { placeholder } = props;
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

export default Input;
