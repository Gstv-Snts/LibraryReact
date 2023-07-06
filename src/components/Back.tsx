import React from 'react';
import { ReactComponent as ArrowLeft } from '../images/ArrowLeft.svg';

function Back(props: { pageName: string; pageText: string }) {
  const { pageName, pageText } = props;
  return (
    <div className="flex flex-row text-2026 font-roboto gap-2 items-center ml-6 mt-6">
      <ArrowLeft />
      <span className="text-[#00000080]">{pageName}</span>
      <span className="font-medium">/ {pageText}</span>
    </div>
  );
}

export default Back;
