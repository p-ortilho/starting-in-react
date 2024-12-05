import './Time.css'
import Colaborador from "../Colaborador"

const Time = (props) => {
    return(
        (props.colaboradores.length > 0) && <section className="time" style={{backgroundColor : props.corFundo}}>
            <h3 style={{borderColor : props.corCard}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador corDefundo={props.corCard} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    );
};

export default Time;