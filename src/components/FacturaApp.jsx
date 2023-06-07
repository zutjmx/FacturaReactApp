import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import { getFactura, getFacturaVacia } from '../services/facturaService';
import { VistaFactura } from './VistaFactura';
import { VistaCliente } from './VistaCliente';
import { VistaEmpresa } from './VistaEmpresa';
import { VistaProductos } from './VistaProductos';
import { VistaTotal } from './VistaTotal';

export const FacturaApp = () => {
  const [contadorItemId, setContadorItemId] = useState(2001);
  const [factura, setFactura] = useState(getFacturaVacia());
  const [items, setItems] = useState([]);  
  const [facturaItemState, setFacturaItemState] = useState({
    descripcion: '',
    precio: '',
    cantidad: ''
  });

  const { id, descripcion: descFactura, cliente, empresa, total } = factura;

  const {descripcion, precio, cantidad} = facturaItemState;
  
  useEffect(() => {
    const datos = getFactura();
    console.log('Datos de la Factura: ',datos);
    setFactura(datos);
    setItems(datos.items);
  }, []);

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
    setItems([...items,{
      id: contadorItemId, 
      descripcion: descripcion.trim().toUpperCase(), 
      precio: +precio.trim(), 
      cantidad: parseInt(cantidad.trim(),10)
    }]);
    setFacturaItemState({
      descripcion: '',
      precio: '',
      cantidad: ''
    });
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
            <VistaFactura id={id} descripcion={descFactura}/>

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
            {/* Componente formulario fin*/}
          </div>
        </div>
        {/* Card principal fin*/}
      </div>
    </>
  );
};
