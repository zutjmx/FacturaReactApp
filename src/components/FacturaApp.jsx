import { getFactura } from '../services/facturaService';
import { VistaFactura } from './VistaFactura';
import { VistaCliente } from './VistaCliente';
import { VistaEmpresa } from './VistaEmpresa';
import { VistaProductos } from './VistaProductos';

export const FacturaApp = () => {
  const { id, descripcion, cliente, empresa, items } = getFactura();
  
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

          </div>
        </div>
        {/* Card principal fin*/}
      </div>
    </>
  );
};
