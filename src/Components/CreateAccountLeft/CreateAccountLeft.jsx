import logo from "../../assets/logo.png"
import SectionLeftCard from "../SectionLeftCard/SectionLeftCard"
import { Zap, Shield, Bell } from 'lucide-react';

import "./CreateAccountLeft.css"
function CreateAccountLeft() {
  return (
    <>
      <section id="section-left-form">
        <div id="section-left-logo">
          <img src={logo} alt="" />
        </div>
        <div id="section-left-text">
          <h1>Crie sua conta</h1>
          <p>Gerencie pedidos, acompanhe garantias e tenha acesso  ao painel exclusivo da eletrotech</p>

        </div>
        <div id="hrsson">
          <hr />
        </div>
        <div>
          <div>
            <SectionLeftCard
              icon={<Zap size={24} color="#fff" />}
              text="Login em segundos após o cadastro"
              title="Acesso rápido"
            />
          </div>
          <div>
            <SectionLeftCard
              icon={<Shield size={24} color="#fff" />}
              text="Criptografia para autenticação segura"
              title="Dados protegidos"
            />
          </div>
          <div>
            <SectionLeftCard
              icon={<Bell size={24} color="#fff" />}
              text="Receba atualizações sobre produtos"
              title="Notificações"
            />
          </div>
        </div>
      </section>



    </>
  )
}

export default CreateAccountLeft
