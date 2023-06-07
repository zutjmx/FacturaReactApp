import { useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'

export const VistaFormularioItems = ({handler}) => {

    const [facturaItemState, setFacturaItemState] = useState({
        descripcion: '',
        precio: '',
        cantidad: ''
    });

    const {descripcion, precio, cantidad} = facturaItemState;

    const onInputChange = ({target: {name,value}}) => {
        setFacturaItemState({
          ...facturaItemState,
          [name]: value
        });
    }

    const onFacturaItemSubmit = (event) => {
        event.preventDefault();
        if(descripcion.trim().length<=1) {
          Swal.fire(
            'Nuevo Producto',
            'Se requiere la descripción del producto',
            'info'
          );
          return;
        }
        if(precio.trim().length<=1) {
          Swal.fire(
            'Nuevo Producto',
            'Se requiere el precio del producto',
            'info'
          );
          return;
        }
        if(isNaN(precio.trim())) {
          Swal.fire(
            'Nuevo Producto',
            'Se requiere que el precio sea un número',
            'info'
          );
          return;
        }
        if(cantidad.trim().length<1) {
          Swal.fire(
            'Nuevo Producto',
            'Se requiere la cantidad del producto',
            'info'
          );
          return;
        }
        if(isNaN(cantidad.trim())) {
          Swal.fire(
            'Nuevo Producto',
            'Se requiere que la cantidad sea un número',
            'info'
          );
          return;
        }
        
        handler(facturaItemState);

        setFacturaItemState({
          descripcion: '',
          precio: '',
          cantidad: ''
        });
    }

    return (
        <>
            <div className="card my-3">
              <div className="card-header">
                Nuevo Producto
              </div>
              <div className="card-body">
                <form className="w-50" onSubmit={event => onFacturaItemSubmit(event)}>
                  <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <input type="text" 
                          className="form-control" 
                          id="descripcion" 
                          name="descripcion" 
                          placeholder="Descripción"
                          onChange={event => onInputChange(event)}
                          value={descripcion}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input type="text" 
                          className="form-control" 
                          id="precio" 
                          name="precio" 
                          placeholder="Precio"
                          onChange={event => onInputChange(event)}
                          value={precio}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" >Cantidad</label>
                    <input type="text" 
                          className="form-control" 
                          id="cantidad" 
                          name="cantidad" 
                          placeholder="Cantidad"
                          onChange={onInputChange}
                          value={cantidad}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
              </div>
            </div>
        </>
    );
}

VistaFormularioItems.propTypes = {
  handler: PropTypes.any.isRequired
}