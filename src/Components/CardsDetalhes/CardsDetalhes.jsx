import "./CardsDetalhes.css";
import { Link } from "react-router-dom";

const defaultFormat = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function CardsDetalhes({
  items = [],
  formatPrice = defaultFormat,
  basePath = "/produto",
  iconSize = 26,
}) {
  return (
    <div className="cards-detalhes">
      {items.map(({ id, name, price, icon: Icon }) => (
        <Link key={id} to={`${basePath}/${id}`} className="cards-detalhes__card">
          <div className="cards-detalhes__img">
            {Icon && <Icon size={iconSize} />}
          </div>
          <div className="cards-detalhes__info">
            <span className="cards-detalhes__name">{name}</span>
            <strong className="cards-detalhes__price">{formatPrice(price)}</strong>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardsDetalhes;