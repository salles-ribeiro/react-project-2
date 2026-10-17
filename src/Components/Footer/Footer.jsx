import "./Footer.css";

const colunasDoRodape = [
  { titulo: "Loja", links: ["Smartphones", "Notebooks", "Áudio", "Games"] },
  { titulo: "Ajuda", links: ["Central de ajuda", "Trocas e devoluções", "Rastrear pedido"] },
  { titulo: "Conta", links: ["Entrar", "Criar conta", "Meus pedidos"] },
];

function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape-conteudo">
        <div>
          <strong className="rodape-marca">ElectroTech</strong>
          <p>Premium Electronics</p>
        </div>
        <div className="rodape-colunas">
          {colunasDoRodape.map((coluna) => (
            <div key={coluna.titulo}>
              <h5>{coluna.titulo}</h5>
              {coluna.links.map((nomeDoLink) => (
                <a key={nomeDoLink} href="#">{nomeDoLink}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="rodape-direitos">© ElectroTech. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;