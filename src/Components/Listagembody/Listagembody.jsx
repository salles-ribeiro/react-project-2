import { useEffect, useState } from "react";
import "./Listagembody.css";
import CardProduto from "../Cardlistagem/Cardlistagem.jsx";

const CATEGORIAS = [
  "Smartphones",
  "Notebooks",
  "Áudio",
  "Games",
  "Casa inteligente",
  "Acessórios",
];

const MARCAS = ["[Marca A]", "[Marca B]", "[Marca C]"];

const AVALIACOES = [
  { valor: 4, rotulo: "4 estrelas ou mais" },
  { valor: 3, rotulo: "3 estrelas ou mais" },
];

const ORDENACOES = [
  "Mais relevantes",
  "Menor preço",
  "Maior preço",
  "Melhor avaliados",
];

const PRODUTOS = [
  { id: 1, categoria: "Smartphones", nome: "Smartphone Pro 256 GB", icone: "phone" },
  { id: 2, categoria: "Smartphones", nome: "Smartphone Lite 128 GB", icone: "phone" },
  { id: 3, categoria: "Notebooks", nome: 'Notebook Ultra 14"', icone: "laptop" },
  { id: 4, categoria: "Notebooks", nome: 'Notebook Gamer 15"', icone: "laptop" },
  { id: 5, categoria: "Áudio", nome: "Headphone Wireless", icone: "headphone" },
  { id: 6, categoria: "Áudio", nome: "Fone In-Ear", icone: "headphone" },
  { id: 7, categoria: "Smartphones", nome: "Smartphone Max 512 GB", icone: "phone" },
  { id: 8, categoria: "Notebooks", nome: 'Notebook Slim 13"', icone: "laptop" },
  { id: 9, categoria: "Áudio", nome: "Caixa de Som Portátil", icone: "headphone" },
];

const TOTAL_PAGINAS = 8;

function GrupoCheckbox({ titulo, itens, selecionados, onAlternar }) {
  return (
    <fieldset className="lb-filtro-grupo">
      <legend className="lb-filtro-grupo__titulo">{titulo}</legend>
      {itens.map((item) => (
        <label key={item.valor} className="lb-check">
          <input
            type="checkbox"
            checked={selecionados.includes(item.valor)}
            onChange={() => onAlternar(item.valor)}
          />
          <span>{item.rotulo}</span>
        </label>
      ))}
    </fieldset>
  );
}

export default function Listagembody({
  produtos = PRODUTOS,
  total,
  onAdicionarAoCarrinho = () => { },
}) {
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [ordenacao, setOrdenacao] = useState(ORDENACOES[0]);
  const [pagina, setPagina] = useState(1);
  const [produtosAPI, setProdutosAPI] = useState([]);

  const alternar = (lista, setLista) => (valor) =>
    setLista(
      lista.includes(valor) ? lista.filter((v) => v !== valor) : [...lista, valor]
    );

  const limparFiltros = () => {
    setCategorias([]);
    setMarcas([]);
    setAvaliacoes([]);
    setPrecoMin("");
    setPrecoMax("");
  };

  const aplicarPreco = (e) => {
    e.preventDefault();
    // Conecte aqui a filtragem por faixa de preço (precoMin / precoMax).
  };

  const paginas = [1, 2, 3, "...", TOTAL_PAGINAS];

  useEffect(() => {
    const fetchData = async () => {
      const produtos = await fetch("https://6ad2a7a366cd28aed82e179a.mockapi.io/api/produtos")
      let data = await produtos.json()
      setProdutosAPI(data)
    }

    fetchData()
  }, [])
  console.log(produtosAPI);

  const orderBy = (order) => {
    setOrdenacao(order);

    setProdutosAPI((lista) => {
      const copia = [...lista];

      if (order === "Menor preço") {
        return copia.sort((a, b) => Number(a.preco) - Number(b.preco));
      }

      if (order === "Maior preço") {
        return copia.sort((a, b) => Number(b.preco) - Number(a.preco));
      }

      if (order === "Melhor avaliados") {
        return copia.sort((a, b) => Number(b.nota) - Number(a.nota));
      }

      // "Mais relevantes": volta à ordem original (por id)
      return copia.sort((a, b) => Number(a.id) - Number(b.id));
    });
  };
  return (
    <main className="lb">
      <nav className="lb-breadcrumb" aria-label="Você está em">
        <a href="/">Início</a>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">Todos os produtos</span>
      </nav>

      <header className="lb-topo">
        <div>
          <h1 className="lb-titulo">Todos os produtos</h1>
          <p className="lb-contagem">
            Exibindo {produtos.length} de {total ?? "[total]"} produtos
          </p>
        </div>

        <label className="lb-ordenar">
          <span>Ordenar por</span>
          <select
            value={ordenacao}
            onChange={(e) => orderBy(e.target.value)}
          >
            {ORDENACOES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
      </header>

      <div className="lb-layout">
        <aside className="lb-filtros" aria-label="Filtros">
          <div className="lb-filtros__topo">
            <h2>Filtros</h2>
            <button type="button" className="lb-link" onClick={limparFiltros}>
              Limpar
            </button>
          </div>

          <GrupoCheckbox
            titulo="Categoria"
            itens={CATEGORIAS.map((c) => ({ valor: c, rotulo: c }))}
            selecionados={categorias}
            onAlternar={alternar(categorias, setCategorias)}
          />

          <GrupoCheckbox
            titulo="Marca"
            itens={MARCAS.map((m) => ({ valor: m, rotulo: m }))}
            selecionados={marcas}
            onAlternar={alternar(marcas, setMarcas)}
          />

          <form className="lb-filtro-grupo" onSubmit={aplicarPreco}>
            <h3 className="lb-filtro-grupo__titulo">Preço</h3>
            <div className="lb-preco">
              <input
                type="number"
                min="0"
                inputMode="numeric"
                placeholder="Mín."
                aria-label="Preço mínimo"
                value={precoMin}
                onChange={(e) => setPrecoMin(e.target.value)}
              />
              <input
                type="number"
                min="0"
                inputMode="numeric"
                placeholder="Máx."
                aria-label="Preço máximo"
                value={precoMax}
                onChange={(e) => setPrecoMax(e.target.value)}
              />
            </div>
            <button type="submit" className="lb-botao lb-botao--cheio">
              Aplicar
            </button>
          </form>

          <GrupoCheckbox
            titulo="Avaliação"
            itens={AVALIACOES}
            selecionados={avaliacoes}
            onAlternar={alternar(avaliacoes, setAvaliacoes)}
          />
        </aside>

        <section className="lb-conteudo" aria-label="Lista de produtos">
          <div className="lb-grade">
            {produtosAPI.map((produto) => (
              <CardProduto
                key={produto.id}
                produto={produto}
                onAdicionar={onAdicionarAoCarrinho}
              />
            ))}
          </div>

          <nav className="lb-paginacao" aria-label="Paginação">
            {paginas.map((p, i) =>
              p === "..." ? (
                <span key={`gap-${i}`} className="lb-pagina lb-pagina--gap">
                  ...
                </span>
              ) : (
                <button
                  key={p}
                  type="button"
                  className={`lb-pagina${p === pagina ? " lb-pagina--ativa" : ""}`}
                  aria-current={p === pagina ? "page" : undefined}
                  onClick={() => setPagina(p)}
                >
                  {p}
                </button>
              )
            )}
            <button
              type="button"
              className="lb-pagina lb-pagina--proxima"
              disabled={pagina >= TOTAL_PAGINAS}
              onClick={() => setPagina((p) => Math.min(p + 1, TOTAL_PAGINAS))}
            >
              Próxima
            </button>
          </nav>
        </section>
      </div>
    </main>
  );
}