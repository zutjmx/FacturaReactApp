import PropTypes from 'prop-types';

const VistaFactura = ({id,descripcion}) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Id: </strong>
                    {id}
                </li>
                <li className="list-group-item">
                    <strong>Descripción: </strong>
                    {descripcion}
                </li>
            </ul>
        </>
    );
}

VistaFactura.propTypes = {
    id: PropTypes.number.isRequired,
    descripcion: PropTypes.string.isRequired,
}

export {
    VistaFactura
}
