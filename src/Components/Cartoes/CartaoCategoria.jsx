import Icone from "./Icone.jsx";

function CartaoCategoria(props) {
  return (
    <>
      <a href="#" className="cartao-categoria">
        <Icone nome={props.icone} tamanho={28} />
        {props.nome}
      </a>
    </>
  )
}

export default CartaoCategoria