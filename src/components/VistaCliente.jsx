import PropTypes from 'prop-types';

const VistaCliente = ({nombre,apellidos,calle,numero,ciudad,estado,pais,cp}) => {
    return (
        <>
            <div className="card my-3">
                <div className="card-body">
                <h5 className="card-title bg-success text-white">
                    Datos Cliente
                </h5>
                </div>
                <ul className="list-group">
                <li className="list-group-item">
                    <strong>Nombre: </strong>
                    {nombre}
                </li>
                <li className="list-group-item">
                    <strong>Apellidos: </strong>
                    {apellidos}
                </li>
                <li className="list-group-item">
                    <strong>Calle: </strong>
                    {calle}
                </li>
                <li className="list-group-item">
                    <strong>Número: </strong>
                    {numero}
                </li>
                <li className="list-group-item">
                    <strong>Ciudad: </strong>
                    {ciudad}
                </li>
                <li className="list-group-item">
                    <strong>Estado: </strong>
                    {estado}
                </li>
                <li className="list-group-item">
                    <strong>País: </strong>
                    {pais}
                </li>
                <li className="list-group-item">
                    <strong>CP: </strong>
                    {cp}
                </li>
                </ul>
            </div>
        </>
    );
}

VistaCliente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    calle: PropTypes.string.isRequired,
    numero: PropTypes.string.isRequired,
    ciudad: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    pais: PropTypes.string.isRequired,
    cp: PropTypes.string.isRequired
}

export {
    VistaCliente
}