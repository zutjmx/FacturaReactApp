import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import { getFactura, getFacturaVacia, calcularTotal } from '../services/facturaService';
import { VistaFactura } from './VistaFactura';
import { VistaCliente } from './VistaCliente';
import { VistaEmpresa } from './VistaEmpresa';
import { VistaProductos } from './VistaProductos';
import { VistaTotal } from './VistaTotal';
import { VistaFormularioItems } from './VistaFormularioItems';

export const FacturaApp = () => {
  const [formaActiva, setFormaActiva] = useState(false);
  const [total, setTotal] = useState(0);
  const [contadorItemId, setContadorItemId] = useState(2001);
  const [factura, setFactura] = useState(getFacturaVacia());
  const [items, setItems] = useState([]);  

  const { id, descripcion: descFactura, cliente, empresa } = factura;
  
  useEffect(() => {
    const datos = getFactura();
    console.log('Datos de la Factura: ',datos);
    setFactura(datos);
    setItems(datos.items);
  }, []);

  useEffect(() => {
    setTotal(calcularTotal(items));
  }, [items]);

  const handlerAddItemSubmit = ({descripcion,precio,cantidad}) => {
    
    setItems([...items,{
      id: contadorItemId, 
      descripcion: descripcion.trim().toUpperCase(), 
      precio: +precio.trim(), 
      cantidad: parseInt(cantidad.trim(),10)
    }]);
    
    setContadorItemId(contadorItemId+1);
    
    Swal.fire(
      'Nuevo Producto',
      'Se agregó el producto',
      'success'
    );
  }

  const handlerBorrarProducto = (id) => {
    Swal.fire({
      title: `¿Desea eliminar el producto con ID: ${id}?`,
      showDenyButton: true,
      confirmButtonText: 'Borrar',
      denyButtonText: `No Borrar`,
    }).then((result) => {
      if (result.isConfirmed) {
        setItems(items.filter(item => item.id !== id));
        Swal.fire('Borrado', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se borró', '', 'info')
      }
    })
  }

  const onFormaActiva = () => {    
    setFormaActiva(!formaActiva);
  }

  return (
    <>
      <div className="container">
        {/* Card principal ini*/}
        <div className="card my-3">
          <div className="card-header"><strong>Factura</strong></div>
          <div className="card-body">
            <VistaFactura id={id} descripcion={descFactura}/> {/* Componente VistaFactura */}
            <div className="row">
              <div className="col">
                <VistaCliente titulo="Datos del Cliente" cliente={cliente}/> {/* Componente cliente*/}
              </div>
              <div className="col">                
                <VistaEmpresa titulo="Datos de la Empresa" empresa={empresa}/> {/* Componente empresa*/}
              </div>
            </div>
            <VistaProductos titulo="Lista de Productos" 
                            items={items} 
                            handlerBorrarProducto={id => handlerBorrarProducto(id)}
            /> {/* Componente productos*/}
            <VistaTotal total={total}/> {/* Componente total*/}
            <button className="btn btn-success" 
                    onClick={onFormaActiva}
            >
              {!formaActiva? 'Agregar Producto': 'Ocultar Formulario'}
            </button>
            {!formaActiva? '': <VistaFormularioItems handler={(nuevoItem) => handlerAddItemSubmit(nuevoItem)}/>} {/* Componente formulario*/}            
          </div>
        </div>
        {/* Card principal fin*/}
      </div>
    </>
  );
}
