import "./DetalhesProdutoBody.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Smartphone, Headphones, Laptop, Star,
  Minus, Plus, Truck, ShieldCheck, RotateCcw,
} from "lucide-react";
import CardsDetalhes from "../CardsDetalhes/CardsDetalhes.jsx";

const product = {
  brand: "[Marca]",
  category: "Smartphones",
  name: "Smartphone Pro 256 GB",
  rating: 4.5,
  reviewsCount: 128,
  price: 2999.9,
  installments: { times: 10, value: 299.99 },
  colors: ["Preto", "Prata", "Azul"],
  storages: ["128 GB", "256 GB", "512 GB"],
  images: [1, 2, 3, 4],
  description:
    "Smartphone de alto desempenho, ideal para quem busca fotos profissionais e bateria para o dia todo. Acompanha carregador, cabo USB-C e capa.",
  specs: [
    { label: "Tela", value: '6,7" AMOLED' },
    { label: "Processador", value: "Octa-core 3.0 GHz" },
    { label: "Memória", value: "8 GB RAM" },
    { label: "Armazenamento", value: "256 GB" },
    { label: "Câmera", value: "50 MP + 12 MP" },
    { label: "Bateria", value: "5000 mAh" },
    { label: "Garantia", value: "12 meses" },
  ],
  review: { author: "Maria S.", text: "Produto excelente, chegou rápido!" },
  related: [
    { id: 2, name: "Smartphone Lite 128 GB", price: 1799.9, icon: Smartphone },
    { id: 3, name: "Headphone Wireless", price: 399.9, icon: Headphones },
    { id: 4, name: 'Notebook Ultra 14"', price: 4599.9, icon: Laptop },
    { id: 5, name: "Fone In-Ear", price: 149.9, icon: Headphones },
  ],
};

const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const dec = (n) => n.toString().replace(".", ",");

function DetalhesProdutoBody() {
  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState(product.colors[0]);
  const [storage, setStorage] = useState("256 GB");
  const [qty, setQty] = useState(1);
  const [cep, setCep] = useState("");
  const [shipping, setShipping] = useState(null);

  const handleCep = (e) => {
    const d = e.target.value.replace(/\D/g, "").slice(0, 8);
    setCep(d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d);
  };

  const calcShipping = () =>
    setShipping(
      cep.length < 9
        ? "Digite um CEP válido."
        : "Entrega em até 5 dias úteis — frete grátis."
    );

  const stars = (value) =>
    [1, 2, 3, 4, 5].map((n) => (
      <Star key={n} size={12} fill={n <= Math.round(value) ? "currentColor" : "none"} />
    ));

  const options = (list, value, setValue) =>
    list.map((opt) => (
      <button
        key={opt}
        type="button"
        className={`chip ${opt === value ? "is-active" : ""}`}
        onClick={() => setValue(opt)}
      >
        {opt}
      </button>
    ));

  return (
    <main className="page">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link to="/">Início</Link> / <Link to="/">{product.category}</Link> / {product.name}
      </nav>

      {/* Produto */}
      <div className="product">
        <div className="gallery">
          <div className="gallery__main">
            <Smartphone size={48} />
          </div>
          <div className="gallery__thumbs">
            {product.images.map((_, i) => (
              <button
                key={i}
                className={`gallery__thumb ${i === activeImg ? "is-active" : ""}`}
                onClick={() => setActiveImg(i)}
                aria-label={`Imagem ${i + 1}`}
              >
                <Smartphone size={18} />
              </button>
            ))}
          </div>
        </div>

        <div className="product__info">
          <small className="muted">
            {product.brand.toUpperCase()} · {product.category.toUpperCase()}
          </small>
          <h1>{product.name}</h1>

          <div className="rating">
            {stars(product.rating)}
            <small>{dec(product.rating)} ·  avaliações</small>
          </div>

          <div className="price">
            <strong>{brl(product.price)}</strong>
            <small>
              ou {product.installments.times}x de {brl(product.installments.value)} sem juros
            </small>
          </div>

          <div className="option">
            <span className="option__label">Cor</span>
            <div className="option__list">{options(product.colors, color, setColor)}</div>
          </div>

          <div className="option">
            <span className="option__label">Armazenamento</span>
            <div className="option__list">{options(product.storages, storage, setStorage)}</div>
          </div>

          <div className="buy-row">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Diminuir">
                <Minus size={12} />
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty(Math.min(10, qty + 1))} aria-label="Aumentar">
                <Plus size={12} />
              </button>
            </div>
            <button
              className="btn btn--dark btn--grow"
              onClick={() => console.log("Comprar", { color, storage, qty })}
            >
              Comprar agora
            </button>
          </div>

          <button
            className="btn btn--outline btn--block"
            onClick={() => console.log("Carrinho", { color, storage, qty })}
          >
            Adicionar ao carrinho
          </button>

          <div className="shipping">
            <label htmlFor="cep">Calcular frete e prazo</label>
            <div className="shipping__row">
              <input id="cep" value={cep} onChange={handleCep} placeholder="00000-000" />
              <button className="btn btn--dark" onClick={calcShipping}>Calcular</button>
            </div>
            {shipping && <p className="shipping__result">{shipping}</p>}
          </div>

          <ul className="benefits">
            <li><Truck size={13} /> Entrega para todo o Brasil</li>
            <li><ShieldCheck size={13} /> Garantia e nota fiscal</li>
            <li><RotateCcw size={13} /> Troca e devolução</li>
          </ul>
        </div>
      </div>

      {/* Descrição + Especificações */}
      <div className="two-cols">
        <section>
          <h2>Descrição</h2>
          <p className="muted">{product.description}</p>
        </section>

        <section>
          <h2>Especificações</h2>
          <dl className="specs">
            {product.specs.map(({ label, value }) => (
              <div key={label} className="specs__row">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      {/* Avaliações */}
      <section className="reviews">
        <div>
          <h2>Avaliações</h2>
          <strong className="reviews__score">{dec(product.rating)}</strong>
          <div className="rating">
            {stars(product.rating)}
            <small>{product.reviewsCount} avaliações</small>
          </div>
        </div>
        <div className="reviews__body">
          <div className="reviews__card">
            <strong>{product.review.author}</strong>
            <p>{product.review.text}</p>
          </div>
          <button className="btn btn--outline">Ver todas as avaliações</button>
        </div>
      </section>

      {/* Relacionados */}
      <section>
        <h2>Você também pode gostar</h2>
        <CardsDetalhes items={product.related} formatPrice={brl} />
      </section>
    </main>
  );
}

export default DetalhesProdutoBody;