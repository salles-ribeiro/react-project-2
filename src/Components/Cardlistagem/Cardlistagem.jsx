import "./Cardlistagem.css";

const ICONES = {
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <line x1="11" y1="18.5" x2="13" y2="18.5" />
    </>
  ),
  laptop: (
    <>
      <rect x="5" y="5" width="14" height="10" rx="1.5" />
      <line x1="2.5" y1="18.5" x2="21.5" y2="18.5" />
    </>
  ),
  headphone: (
    <>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
    </>
  ),
};

export default function CardProduto({ produto, onAdicionar }) {
  const { icone, categoria, nome, nota = "[nota]", preco = "[preço]", link } = produto;

  return (
    <article className="lb-card">
      <div className="lb-card__imagem">
        <img id="image-card-products" src={link} alt="" />
      </div>

      <div className="lb-card__corpo">
        <span className="lb-card__categoria">{categoria}</span>
        <h3 className="lb-card__nome">{nome}</h3>

        <div className="lb-card__nota">
          <span className="lb-estrelas" aria-hidden="true">★★★★★</span>
          <span className="lb-card__nota-valor">{nota}</span>
        </div>

        <p className="lb-card__preco">R$ {preco}</p>

        <button
          type="button"
          className="lb-botao lb-botao--cheio"
          onClick={() => onAdicionar(produto)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}