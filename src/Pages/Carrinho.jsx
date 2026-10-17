import ProdutoCarrinho from "../Components/ProdutoCarrinho/ProdutoCarrinho";
import ResumoPedido from "../Components/ResumoPedido/ResumoPedido";
import { SmartphoneIcone, HeadphoneIcone, NotebookIcone } from "../Components/ProdutoCarrinho/ProdutoIcone";
import "./Carrinho.css";

export default function Carrinho() {
  return (
    <main className="carrinho">
      <header className="carrinho__header">
        <h1>Meu carrinho</h1>
        <span>3 itens</span>
      </header>

      <div className="carrinho__layout">
        {/* 🔽 LISTA DE PRODUTOS */}
        <section className="carrinho__lista">

          <ProdutoCarrinho
            nome="Smartphone Pro 256 GB"
            detalhes="[Cor] · 256 GB"
            preco={3499.9}
            quantidade={1}
            icone={<SmartphoneIcone />}
            onRemover={() => console.log("remover smartphone")}
            onAumentar={() => console.log("+ smartphone")}
            onDiminuir={() => console.log("- smartphone")}
          />

          <ProdutoCarrinho
            nome="Headphone Wireless"
            detalhes="[Cor]"
            preco={799.9}
            quantidade={1}
            icone={<HeadphoneIcone />}
            onRemover={() => console.log("remover headphone")}
            onAumentar={() => console.log("+ headphone")}
            onDiminuir={() => console.log("- headphone")}
          />

          <ProdutoCarrinho
            nome='Notebook Ultra 14"'
            detalhes="[Cor] · [RAM] · [SSD]"
            preco={5499.9}
            quantidade={1}
            icone={<NotebookIcone />}
            onRemover={() => console.log("remover notebook")}
            onAumentar={() => console.log("+ notebook")}
            onDiminuir={() => console.log("- notebook")}
          />

          <a href="/" className="carrinho__continuar">
            ← Continuar comprando
          </a>
        </section>

        {/* 🔽 RESUMO DO PEDIDO (é isso que faltava!) */}
        <ResumoPedido
          subtotal="9799,70"
          frete="0,00"
          desconto="0,00"
          total="9799,70"
          parcelas={10}
          valorParcela="979,97"
          onFinalizar={() => console.log("finalizar compra")}
        />
      </div>
    </main>
  );
}