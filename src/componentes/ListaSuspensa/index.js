import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className="lista__suspensa">
            <label htmlFor={props.id}>{props.label}</label>
            <select onChange={evento => props.aoAlterar(evento.target.value)} id={props.id} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default ListaSuspensa;