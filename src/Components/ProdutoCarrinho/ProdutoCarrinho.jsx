import "./ProdutoCarrinho.css";

export default function ProdutoCarrinho(props) {
  return (
    <article className="produto-carrinho">
      <div className="produto-carrinho__icone">
        {props.icone}
      </div>

      <div className="produto-carrinho__info">
        <h2>{props.nome}</h2>
        <p>{props.detalhes}</p>
        <button
          type="button"
          className="produto-carrinho__remover"
          onClick={props.onRemover}
        >
          ♜ Remover
        </button>
      </div>

      <div className="produto-carrinho__quantidade">
        <button type="button" onClick={props.onDiminuir}>−</button>
        <span>{props.quantidade}</span>
        <button type="button" onClick={props.onAumentar}>+</button>
      </div>

      <div className="produto-carrinho__preco">
        <small>R$ {props.preco.toFixed(2)} (unitário) un.</small>
        <strong>R$ {(props.preco * props.quantidade).toFixed(2)}</strong>
      </div>
    </article>
  );
}