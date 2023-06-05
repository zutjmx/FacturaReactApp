import { useState } from 'react';

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
            <form className="w-50" onSubmit={event => {
              event.preventDefault();
              setItems([...items,{
                id: contadorItemId, 
                descripcion: valorDescripcion, 
                precio: +valorPrecio, 
                cantidad: parseInt(valorCantidad,10)
              }]);
              setValorDescripcion('');
              setValorPrecio('');
              setValorCantidad('');
              setContadorItemId(contadorItemId+1);
            }}>
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input type="text" 
                       className="form-control" 
                       id="descripcion" 
                       name="descripcion" 
                       placeholder="Descripción"
                       onChange={event => {
                        console.log(event.target.value);
                        setValorDescripcion(event.target.value);
                       }}
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
                       onChange={event => {
                        console.log(event.target.value);
                        setValorPrecio(event.target.value);
                       }}
                       value={valorPrecio}
                />
              </div>
              <div className="mb-3">
                <label className="form-check-label" >Cantidad</label>
                <input type="text" 
                       className="form-control" 
                       id="cantidad" 
                       name="cantidad" 
                       placeholder="Cantidad"
                       onChange={event => {
                        console.log(event.target.value);
                        setValorCantidad(event.target.value);
                       }}
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
