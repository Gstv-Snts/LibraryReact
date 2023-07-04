import { ReactComponent as Logo } from "../images/Logo.svg";
import { ReactComponent as User } from "../images/User.svg";
import { ReactComponent as Arrow } from "../images/Arrow.svg";
import { useState } from "react";
function Header() {
  const [sair, setSair] = useState(false);
  const sairVisibilit = (sairState: boolean) => {
    if (sairState === true) {
      return "visible";
    } else {
      return "invisible";
    }
  };
  return (
    <header className="flex row justify-between p-7 bg-white flex-wrap items-center">
      <Logo className="w-32 h-12" />

      <section className="relative w-36">
        <div className="flex row gap-2 items-center justify-end">
          <User className="text-first w-6 h-6" />
          <p className="text-1852 font-roboto">Usuário</p>
          <Arrow
            onClick={() => {
              if (sair === true) {
                setSair(false);
              } else {
                setSair(true);
              }
            }}
            className="cursor-pointer w-6 h-6"
          />
        </div>
        <button
          className={
            "p-4 w-36 bg-second text-left absolute text-1818 font-poppins " +
            sairVisibilit(sair)
          }
        >
          Sair
        </button>
      </section>
    </header>
  );
}

export default Header;
