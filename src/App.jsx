import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import CreateAccountPage from "./Pages/CreateAccountPage"
import Listaprodutopage from "./Pages/Listaprodutopage"
import DashboardPage from "./Pages/DashboardPage"
import Carrinho from "./Pages/Carrinho";
import DetalhesProdutoPage from "./Pages/DetalhesProdutoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/login" element={<LoginPage/>}    />
          <Route  path="/listagem" element={<Listaprodutopage/>}    />
          <Route path="/detalhes" element={<DetalhesProdutoPage />} />
          <Route  path="/criarConta" element={<CreateAccountPage/>}/>
          <Route  path="/" element={<DashboardPage/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App;
