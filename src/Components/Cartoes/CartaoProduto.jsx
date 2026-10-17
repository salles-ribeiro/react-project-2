import Icone from "./Icone.jsx";

function CartaoProduto(props) {
  const precoEmReais = props.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <article className="cartao-produto">
        <div className="produto-imagem">
          <Icone nome={props.icone} tamanho={40} />
        </div>
        <div className="produto-detalhes">
          <small>{props.categoria}</small>
          <h3>{props.nome}</h3>
          <strong>{precoEmReais}</strong>
          <button className="botao botao-escuro">Adicionar ao carrinho</button>
        </div>
      </article>
    </>
  )
}

export default CartaoProduto