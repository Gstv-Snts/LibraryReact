import React from 'react';

function Data(props: { placeholder: string | undefined }) {
  const { placeholder } = props;
  return (
    <input
      placeholder={placeholder}
      className="border border-[#133052] rounded-md w-full text-1621 p-4 text-[#133052] placeholder-[#133052] relative outline-none "
      type="date"
    />
  );
}

export default Data;
