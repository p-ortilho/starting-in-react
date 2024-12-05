import './CampoTexto.css';

const CampoTexto = (props) => {
    //const placeholderDiferente = `${props.placeholder} alguma coisa`;

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value);
    };

    return (
        <div className="campo__texto">
            <label htmlFor={props.id}>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} id={props.id} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
}

export default CampoTexto;