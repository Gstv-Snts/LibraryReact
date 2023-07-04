import { ReactComponent as Logo } from "../../images/Logo.svg";
import { ReactComponent as Email } from "../../images/Email.svg";
import { ReactComponent as Lock } from "../../images/Lock.svg";
import Input from "./Input";
function Login() {
  return (
    <div className="h-full w-full bg-loginBG bg-cover bg-bottom flex items-center justify-center">
      <form
        action=""
        className="w-11/12 max-w-[433px] bg-white px-10 py-14 flex flex-col gap-8 items-center justify-center rounded-lg"
      >
        <Logo />
        <Input placeholder="E-mail" Icon={Email} />
        <Input placeholder="Senha" Icon={Lock} />
        <a className="text-1419 text-black font-bold underline font-roboto text-left w-full">
          Esqueci minha senha
        </a>
        <button className="w-full rounded bg-first text-1621 font-bold text-center py-3">
          ENTRAR
        </button>
      </form>
    </div>
  );
}

export default Login;
