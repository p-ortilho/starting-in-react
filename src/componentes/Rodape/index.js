import './Rodape.css'

const Rodape = () => {
    return(
        <footer className="rodape__baixo">
            <div className="rede__social">
                <a href="https://pt-br.facebook.com/" target="_blank" rel="">
                    <img src="./imagens/fb.png" alt="facebook icon"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="">
                    <img src="./imagens/ig.png" alt="instagram icon"/>
                </a>
                <a href="https://x.com/" target="_blank" rel="">
                    <img src="./imagens/tw.png" alt="twitter icon"/>
                </a>
            </div>
            <img src="./imagens/logo.png" alt="Logo organo"/>
            <h1 className="texto__rodape">Desenvolvido por p-ortilho</h1>
        </footer>
    );
};

export default Rodape;