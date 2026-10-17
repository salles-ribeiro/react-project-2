import CartaoCategoria from "../cartoes/CartaoCategoria";
import CartaoProduto from "../cartoes/CartaoProduto";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Icone from "../Cartoes/Icone.jsx";
import "./Dashboard.css";




const categoriasDaLoja = [
  { nome: "Smartphones", icone: "smartphone" },
  { nome: "Notebooks", icone: "notebook" },
  { nome: "Áudio", icone: "fone" },
  { nome: "Games", icone: "controle" },
  { nome: "Casa inteligente", icone: "casa" },
  { nome: "Acessórios", icone: "tomada" },
];

const produtosEmDestaque = [
  { id: 1, categoria: "Smartphones", nome: "Smartphone Pro", preco: 4999.9, icone: "smartphone" },
  { id: 2, categoria: "Notebooks", nome: "Notebook Ultra", preco: 7499.9, icone: "notebook" },
  { id: 3, categoria: "Áudio", nome: "Headphone Wireless", preco: 899.9, icone: "fone" },
  { id: 4, categoria: "Games", nome: "Console de Mesa", preco: 3799.9, icone: "controle" },
];

const beneficiosDaLoja = [
  { titulo: "Entrega para todo o Brasil", descricao: "Acompanhe seu pedido em tempo real." },
  { titulo: "Pagamento seguro", descricao: "Cartão, Pix e boleto." },
  { titulo: "Garantia nos produtos", descricao: "Produtos originais e com nota fiscal." },
  { titulo: "Suporte especializado", descricao: "Atendimento antes e depois da compra." },
];



function Dashboard() {
  return (
    <div className="dashboard">
      <Header/>

      <section className="banner">
        <div className="conteudo-centralizado banner-conteudo">
          <div className="banner-texto">
            <span className="banner-etiqueta">Premium Electronics</span>
            <h1>
              Tecnologia premium,
              <br />
              <span>ao seu alcance</span>
            </h1>
            <p>
              Smartphones, notebooks, áudio e muito mais, com produtos originais
              e entrega para todo o Brasil.
            </p>
            <div className="banner-botoes">
              <button className="botao botao-claro">Ver ofertas</button>
              <button className="botao botao-contorno">Explorar categorias</button>
            </div>
          </div>
          <div className="banner-ilustracao">
            <Icone nome="logo" tamanho={240} />
          </div>
        </div>
      </section>

      <main className="conteudo-centralizado conteudo-principal">
        <section>
          <h2>Compre por categoria</h2>
          <div className="grade-categorias">
            {categoriasDaLoja.map((categoria) => (
                <CartaoCategoria
                key={categoria.nome}
                nome={categoria.nome}
                icone={categoria.icone}
                />
            ))}
          </div>
        </section>

        <section>
          <div className="titulo-com-link">
            <h2>Destaques</h2>
            <a href="#">Ver todos</a>
          </div>
          <div className="grade-produtos">
            {produtosEmDestaque.map((produto) => (
                <CartaoProduto
                key={produto.id}
                categoria={produto.categoria}
                nome={produto.nome}
                preco={produto.preco}
                icone={produto.icone}
                />
            ))}
          </div>
        </section>

        <section className="convite-criar-conta">
          <div>
            <h2>Novo por aqui?</h2>
            <p>
              Crie sua conta para acompanhar pedidos, salvar endereços e comprar
              mais rápido.
            </p>
          </div>
          <a href="/create-account" className="botao botao-escuro">Criar conta</a>
        </section>

        <section className="grade-beneficios">
          {beneficiosDaLoja.map((beneficio) => (
            <div key={beneficio.titulo}>
              <h4>{beneficio.titulo}</h4>
              <p>{beneficio.descricao}</p>
            </div>
          ))}
        </section>
      </main>

    <Footer />

    </div>
  );
}

export default Dashboard;