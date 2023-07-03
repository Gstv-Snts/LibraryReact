function Card(props: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: String;
}) {
  return (
    <article className="w-fit h-56 bg-second flex flex-col justify-between">
      <props.Icon className="mx-28 mt-14 h-10" />
      <button
        className="w-full py-7 bg-white border-3 border-second text-1621 
        font-roboto"
      >
        {props.text}
      </button>
    </article>
  );
}

export default Card;
