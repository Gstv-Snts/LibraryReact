import Card from "./Card";
import Main from "../Main";
import Header from "../Header";
import { ReactComponent as Logo } from "../../images/CirclePlus.svg";
import { ReactComponent as Book } from "../../images/Book.svg";
import { ReactComponent as Pending } from "../../images/PendingAction.svg";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <div className="w-full flex flex-wrap gap-10 justify-center pt-48">
          <Card Icon={Logo} text={"Cadastrar novo livro"} />
          <Card Icon={Book} text={"Biblioteca"} />
          <Card Icon={Pending} text={"Histórico de empréstimos"} />
        </div>
      </Main>
    </>
  );
}

export default Home;
