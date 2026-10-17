export default function CampoComBotao({
  id,
  label,
  placeholder,
  textoBotao,
  onAplicar,
}) {
  return (
    <div className="campo-com-botao">
      <label htmlFor={id}>{label}</label>
      <div className="campo-com-botao__linha">
        <input id={id} type="text" placeholder={placeholder} />
        <button type="button" onClick={onAplicar}>
          {textoBotao}
        </button>
      </div>
    </div>
  );
}