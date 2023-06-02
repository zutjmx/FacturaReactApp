import PropTypes from 'prop-types';

const VistaEmpresa = ({nombre, numeroFiscal}) => {
  return (
    <>
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title bg-success text-white">Datos Empresa</h5>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Nombre: </strong>
            {nombre}
          </li>
          <li className="list-group-item">
            <strong>N° Fiscal: </strong>
            {numeroFiscal}
          </li>
        </ul>
      </div>
    </>
  );
};

VistaEmpresa.propTypes = {
    nombre: PropTypes.string.isRequired,
    numeroFiscal: PropTypes.string.isRequired
}

export {
    VistaEmpresa
};
