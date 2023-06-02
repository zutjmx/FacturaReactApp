import PropTypes from 'prop-types';

export const VistaRenglonElemento = ({ id, descripcion, precio, cantidad }) => {
  return (
    <>
      <tr>
        <td align="center">{id}</td>
        <td>{descripcion}</td>
        <td align="right">{precio}</td>
        <td align="right">{cantidad}</td>
      </tr>
    </>
  );
};

VistaRenglonElemento.propTypes = {
    id: PropTypes.number.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    cantidad: PropTypes.number.isRequired,
}
