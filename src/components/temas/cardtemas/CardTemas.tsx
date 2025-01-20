import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";

interface CardTemasProps {
  tema: Tema;
}

function CardTema({ tema }: CardTemasProps) {
  return (
    <div>
      <header>Tema</header>
      <p>{tema.descricao}</p>

      <div>
        <Link to={`/editartema/${tema.id}`}>
          <button className="mr-2">Editar</button>
        </Link>

        <Link to="">
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTema;
