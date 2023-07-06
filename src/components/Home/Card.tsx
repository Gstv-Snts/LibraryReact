import React from 'react';

function Card(props: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: String;
}) {
  const { Icon, text } = props;
  return (
    <article className="w-fit h-56 bg-second flex flex-col justify-between">
      <Icon className="mx-28 mt-14 h-10" />
      <button
        type="button"
        className="w-full py-7 bg-white border-3 border-second text-1621 
        font-roboto"
      >
        {text}
      </button>
    </article>
  );
}

export default Card;
