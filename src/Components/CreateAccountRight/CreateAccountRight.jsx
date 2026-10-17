import { CiLock } from "react-icons/ci";
import "./CreateAccountRight.css"
import InputCreateAccount from "../InputCreateAccount/InputCreateAccount";
function CreateAccountRight() {
  return (
    <>
      <section id="create-account-right">
        <div id="container-account-right">
          <div id="container-account-titles">
            <h1>Cadastro</h1>
            <p>Preencha suas informações para criar uma nova conta</p>
          </div>
          <div id="container-account-icon">
            <CiLock size={20} />
            <p>Seguro</p>
          </div>
        </div>
        <div>
          <div className="container-inputs-account">
            <InputCreateAccount
              type="text"
              placeholder="João"
              label="Nome"
            />

            <InputCreateAccount
              type="text"
              placeholder="Silva"
              label="Sobrenome"
            />
          </div>

          <div className="container-inputs-account">
            <InputCreateAccount
              type="email"
              placeholder="Email"
              label="Email"
            />

            <InputCreateAccount
              type="text"
              placeholder="(99) 99999999"
              label="Telefone"
            />
          </div>

          <div className="container-inputs-account">
            <InputCreateAccount
              type="text"
              placeholder="123.123.123.-12"
              label="CPF"
            />

            <InputCreateAccount
              type="text"
              placeholder="Empresa"
              label="Empresa"
            />
          </div>

          <div className="container-inputs-account">
            <InputCreateAccount
              type="password"
              placeholder="Digite sua senha"
              label="Digite novamente"
            />

            <InputCreateAccount
              type="password"
              placeholder="Digite sua senha novamente"
              label="Senha"
            />
          </div>
          <div id="container-checkbox">
            <input type="checkbox"/>
            <p>Li e aceito os <a href="">Termos de uso</a> e a <a href="">Política de privacidade</a></p>
          </div>

          <div id="container-button-cadastro">
            <button>Entrar</button>
          </div>

          <div id="container-divisor">
            <hr />
            <p>ou</p>
            <hr />
          </div>
        </div>
        <div id="container-possui-conta">
          <p>Ja possui uma conta? <a href="">Fazer Login</a></p>
        </div>
      </section>
    </>
  )
}

export default CreateAccountRight