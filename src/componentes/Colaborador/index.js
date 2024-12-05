import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, corDefundo}) => {
    return(
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: corDefundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
};

// const Colaborador = (pros) => {
//     return(
//         <div className="colaborador">
//             <div className="cabecalho">
//                 <img src={props.imagem} alt={props.nome} />
//             </div>
//             <div className="rodape">
//                 <h4>{props.nome}</h4>
//                 <h5>{props.cargo}</h5>
//             </div>
//         </div>
//     );
// };

export default Colaborador;