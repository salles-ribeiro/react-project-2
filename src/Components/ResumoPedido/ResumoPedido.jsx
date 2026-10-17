import CampoComBotao from "../CampoComBotao/CampoComBotao";
import "./ResumoPedido.css";

export default function ResumoPedido({
  subtotal,
  frete,
  desconto,
  total,
  parcelas,
  valorParcela,
  onFinalizar,
}) {
  return (
    <aside className="resumo-pedido">
      <h2>Resumo do pedido</h2>

      <CampoComBotao
        id="cupom"
        label="Cupom de desconto"
        placeholder="Digite o cupom"
        textoBotao="Aplicar"
        onAplicar={() => console.log("aplicar cupom")}
      />

      <CampoComBotao
        id="cep"
        label="Calcular frete"
        placeholder="00000-000"
        textoBotao="Calcular"
        onAplicar={() => console.log("calcular frete")}
      />

      <div className="resumo-pedido__valores">
        <div>
          <span>Subtotal</span>
          <span>R$ {subtotal}</span>
        </div>
        <div>
          <span>Frete</span>
          <span>R$ {frete}</span>
        </div>
        <div>
          <span>Desconto</span>
          <span>− R$ {desconto}</span>
        </div>
      </div>

      <div className="resumo-pedido__total">
        <strong>Total</strong>
        <div>
          <strong>R$ {total}</strong>
          <small>
            ou {parcelas}x de R$ {valorParcela} sem juros
          </small>
        </div>
      </div>

      <button
        type="button"
        className="resumo-pedido__finalizar"
        onClick={onFinalizar}
      >
        Finalizar compra
      </button>

      <p className="resumo-pedido__pagamento">
        Pagamento seguro · Cartão, Pix e boleto
      </p>
    </aside>
  );
}