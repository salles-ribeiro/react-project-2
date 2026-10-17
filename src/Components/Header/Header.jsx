import "./Header.css";
import logoElectroTech from "../../assets/electrotech-logo.png";

function Header() {

    function Icone({ nome, tamanho = 24 }) {
        return (
            <svg
                width={tamanho}
                height={tamanho}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {desenhosDosIcones[nome]}
            </svg>
        );
    }
    const linksDoMenu = [
        "Smartphones",
        "Notebooks",
        "Áudio",
        "Games",
        "Casa inteligente",
        "Acessórios",
        "Ofertas",
    ];
    const desenhosDosIcones = {
        logo: (
            <>
                <path d="M12 2l9 5v10l-9 5-9-5V7z" />
                <line x1="9" y1="15" x2="15" y2="9" />
                <circle cx="9" cy="15" r="1.3" />
                <circle cx="15" cy="9" r="1.3" />
            </>
        ),
        smartphone: (
            <>
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <line x1="11" y1="18" x2="13" y2="18" />
            </>
        ),
        notebook: (
            <>
                <rect x="4" y="5" width="16" height="11" rx="1.5" />
                <line x1="2" y1="19" x2="22" y2="19" />
            </>
        ),
        fone: (
            <>
                <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                <rect x="3" y="14" width="4" height="6" rx="1.5" />
                <rect x="17" y="14" width="4" height="6" rx="1.5" />
            </>
        ),
        controle: (
            <>
                <rect x="2" y="7" width="20" height="10" rx="5" />
                <line x1="7" y1="10.5" x2="7" y2="13.5" />
                <line x1="5.5" y1="12" x2="8.5" y2="12" />
                <circle cx="16.5" cy="12" r="0.8" />
            </>
        ),
        casa: (
            <>
                <path d="M3 11l9-8 9 8" />
                <path d="M5 10v10h14V10" />
            </>
        ),
        tomada: (
            <>
                <line x1="9" y1="2" x2="9" y2="7" />
                <line x1="15" y1="2" x2="15" y2="7" />
                <path d="M6 7h12v4a6 6 0 0 1-12 0V7z" />
                <line x1="12" y1="17" x2="12" y2="22" />
            </>
        ),
        carrinho: (
            <>
                <path d="M2 3h3l2.5 12h11l2-8H6.5" />
                <circle cx="9" cy="19" r="1.5" />
                <circle cx="17" cy="19" r="1.5" />
            </>
        ),
    };
    return (
        <>
            <header className="cabecalho">
                <div className="conteudo-centralizado cabecalho-topo">
                 <div className="logo">
                    <img src={logoElectroTech} alt="ElectroTech" className="logo-imagem" />
                </div>
                    <input className="campo-busca" type="search" placeholder="Buscar produtos" />
                    <a href="/login">Entrar</a>
                    <a href="/create-account">Cadastre-se</a>
                    <Icone nome="carrinho" tamanho={20} />
                </div>
                <nav className="menu">
                    <div className="conteudo-centralizado menu-links">
                        {linksDoMenu.map((nomeDoLink) => (
                            <a key={nomeDoLink} href="#">{nomeDoLink}</a>
                        ))}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
