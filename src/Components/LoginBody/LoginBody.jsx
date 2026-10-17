import "./LoginBody.css"
import Logo from "../../assets/electrotech-logo.png"
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function LoginBody() {
  return (
    <>
        <section id="login-body">
            <div id="login-form">
                <div id="logo-image">
                    <img src={Logo} alt="" />
                </div>
                <div id="login-input">

                   <h1>Bem vindo de volta</h1>
                   <input type="text" placeholder="Email ou usuario" className="login-input"/>
                   <input type="password" name="" id="" placeholder="Digite sua senha" className="login-input"/>
                   <a id="esqueceu-senha" href="">Esqueceu a senha ? </a>

                   <button id="login-button">Entrar</button> 
                </div>
                <div id="divider">
                    <hr />
                    <p>ou continue com</p>
                    <hr />
                </div>
                <div>
                    <div id="button-container">
                        <button className="button-icons">  <FcGoogle size={20} /> Google</button>
                        <button className="button-icons"> <FaApple size={20} /> Apple</button>
                        <button className="button-icons"> <FaFacebook size={20} color="#1877F2" />Facebook</button>
                    </div>
                    <div id="cadastre-se-agora">
                        <p>Não tem uma conta ?<span> Cadastre-se agora</span></p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default LoginBody
