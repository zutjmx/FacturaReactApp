import { useState } from 'react';
import Swal from 'sweetalert2'

import { getFactura } from '../services/facturaService';
import { VistaFactura } from './VistaFactura';
import { VistaCliente } from './VistaCliente';
import { VistaEmpresa } from './VistaEmpresa';
import { VistaProductos } from './VistaProductos';
import { VistaTotal } from './VistaTotal';

export const FacturaApp = () => {
  const { id, descripcion, cliente, empresa, items: initalItems, total } = getFactura();
  const [valorDescripcion, setValorDescripcion] = useState('');
  const [valorPrecio, setValorPrecio] = useState('');
  const [valorCantidad, setValorCantidad] = useState('');
  const [items, setItems] = useState(initalItems);
  const [contadorItemId, setContadorItemId] = useState(2001);

  const onDescripcionChange = ({target}) => {
    setValorDescripcion(target.value);
  }

  const onPrecioChange = ({target}) => {
    setValorPrecio(target.value);
  }

  const onCantidadChange = ({target}) => {
    setValorCantidad(target.value);
  }

  const onFacturaItemSubmit = (event) => {
    event.preventDefault();
    if(valorDescripcion.trim().length<=1) {
      Swal.fire(
        'Nuevo Producto',
        'Se requiere la descripción del producto',
        'info'
      );
      return;
    }
    if(valorPrecio.trim().length<=1) {
      Swal.fire(
        'Nuevo Producto',
        'Se requiere el precio del producto',
        'info'
      );
      return;
    }
    if(isNaN(valorPrecio.trim())) {
      Swal.fire(
        'Nuevo Producto',
        'Se requiere que el precio sea un número',
        'info'
      );
      return;
    }
    if(valorCantidad.trim().length<1) {
      Swal.fire(
        'Nuevo Producto',
        'Se requiere la cantidad del producto',
        'info'
      );
      return;
    }
    if(isNaN(valorCantidad.trim())) {
      Swal.fire(
        'Nuevo Producto',
        'Se requiere que la cantidad sea un número',
        'info'
      );
      return;
    }
    setItems([...items,{
      id: contadorItemId, 
      descripcion: valorDescripcion.trim().toUpperCase(), 
      precio: +valorPrecio.trim(), 
      cantidad: parseInt(valorCantidad.trim(),10)
    }]);
    setValorDescripcion('');
    setValorPrecio('');
    setValorCantidad('');
    setContadorItemId(contadorItemId+1);
    Swal.fire(
      'Nuevo Producto',
      'Se agregó el producto',
      'success'
    );
  }

  return (
    <>
      <div className="container">
        {/* Card principal ini*/}
        <div className="card my-3">
          <div className="card-header"><strong>Factura</strong></div>
          <div className="card-body">
            
            {/* Componente VistaFactura */}
            <VistaFactura id={id} descripcion={descripcion}/>

            <div className="row">
              <div className="col">
                {/* Componente cliente ini*/}
                <VistaCliente titulo="Datos del Cliente" cliente={cliente}/>
                {/* Componente cliente fin*/}
              </div>

              <div className="col">
                {/* Componente empresa ini*/}
                <VistaEmpresa titulo="Datos de la Empresa" empresa={empresa}/>
                {/* Componente empresa fin*/}
              </div>
            </div>

            {/* Componente productos ini*/}            
            <VistaProductos titulo="Lista de Productos" items={items}/>
            {/* Componente productos fin*/}
            <VistaTotal total={total}/> {/* Componente total*/}
            {/* Componente formulario ini*/}
            <form className="w-50" onSubmit={event => onFacturaItemSubmit(event)}>
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input type="text" 
                       className="form-control" 
                       id="descripcion" 
                       name="descripcion" 
                       placeholder="Descripción"
                       onChange={event => onDescripcionChange(event)}
                       value={valorDescripcion}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Precio</label>
                <input type="text" 
                       className="form-control" 
                       id="precio" 
                       name="precio" 
                       placeholder="Precio"
                       onChange={event => onPrecioChange(event)}
                       value={valorPrecio}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" >Cantidad</label>
                <input type="text" 
                       className="form-control" 
                       id="cantidad" 
                       name="cantidad" 
                       placeholder="Cantidad"
                       onChange={onCantidadChange}
                       value={valorCantidad}
                />
              </div>
              <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
            {/* Componente formulario fin*/}
          </div>
        </div>
        {/* Card principal fin*/}
      </div>
    </>
  );
};
