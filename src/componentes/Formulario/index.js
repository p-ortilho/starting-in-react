import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) =>  {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado(
            {
                nome: nome,
                cargo: cargo,
                imagem: imagem,
                time: time
            }
        );
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    id="nome" 
                    placeholder="Digite seu nome" 
                    valor={nome} 
                    aoAlterar={valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    id="cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    id="imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    label="Time" 
                    id="lista" 
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />

                <Botao>Criar card</Botao>
            </form>
        </section>
    );
}

export default Formulario;