import PropTypes from 'prop-types';

const VistaEmpresa = ({empresa}) => {
  const {nombre, numeroFiscal} = empresa;
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
  empresa: PropTypes.object.isRequired
}

export {
    VistaEmpresa
};
