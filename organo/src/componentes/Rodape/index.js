import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/facebook.png" alt="Facebook link" />
                        </a>
                    </li>
                    <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/twitter.png" alt="Twitter link" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/instagram.png" alt="Instagram link" />
                    </a>
                </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Logo da Alura" />
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
};

export default Rodape;