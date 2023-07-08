import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../images/ArrowLeft.svg';

function Back(props: { pageName: string; pageText: string; to: string }) {
  const { pageName, pageText, to } = props;
  return (
    <Link to={to}>
      <div className="flex flex-row w-full text-2026 font-roboto gap-2 items-center ml-6 mt-6">
        <ArrowLeft />
        <span className="text-[#00000080]">{pageName}</span>
        <span className="font-medium">/ {pageText}</span>
      </div>
    </Link>
  );
}

export default Back;
