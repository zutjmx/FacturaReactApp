import PropTypes from 'prop-types';

const VistaProductos = ({titulo,items}) => {
    return (
        <>
            <div className="card my-3">
              <div className="card-header">
                <h5 className="bg-info text-dark">{titulo}</h5>
              </div>
              <div className="card-body">
                <table className="table table-success table-striped table-hover table-bordered border-primary">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Descripcion</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(({ id, descripcion, precio, cantidad }) => {
                      return (
                        <tr key={id}>
                          <td align="center">{id}</td>
                          <td>{descripcion}</td>
                          <td align="right">{precio}</td>
                          <td align="right">{cantidad}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
        </>
    );
}

VistaProductos.propTypes = {
    titulo: PropTypes.string.isRequired, 
    items: PropTypes.array.isRequired
}

export {
    VistaProductos
}