import PropTypes from 'prop-types';
import { VistaRenglonElemento } from './VistaRenglonElemento';

const VistaProductos = ({titulo,items,handlerBorrarProducto}) => {
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
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(({ id, descripcion, precio, cantidad }) => {
                      return (
                        <VistaRenglonElemento key={id} 
                                              id={id} 
                                              descripcion={descripcion} 
                                              precio={precio} 
                                              cantidad={cantidad}
                                              handlerBorrarProducto={id => handlerBorrarProducto(id)}
                        />
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
    items: PropTypes.array.isRequired,
    handlerBorrarProducto: PropTypes.any.isRequired
}

export {
    VistaProductos
}