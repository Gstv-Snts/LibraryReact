import React from 'react';

function Input(props: {
  placeholder: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) {
  const { placeholder, Icon } = props;
  return (
    <div className="w-full h-12 rounded-sm bg-second px-4 flex content-between items-center ">
      <input
        placeholder={placeholder}
        className="h-full w-full bg-inherit text-1419 font-roboto"
      />
      <Icon />
    </div>
  );
}

export default Input;
