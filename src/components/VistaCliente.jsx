import PropTypes from 'prop-types';

const VistaCliente = ({titulo,cliente}) => {
    const { nombre, apellidos, direccion: { calle, numero, ciudad, estado, pais, cp } } = cliente;

    return (
        <>
            <div className="card my-3">
                <div className="card-body">
                <h5 className="card-title bg-success text-white">
                    {titulo}
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
    cliente: PropTypes.object.isRequired,
    titulo: PropTypes.string.isRequired
}

export {
    VistaCliente
}