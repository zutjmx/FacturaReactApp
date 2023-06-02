import { getFactura } from "../services/facturaService";
import { VistaFactura } from './VistaFactura';
import { VistaCliente } from './VistaCliente';
import { VistaEmpresa } from './VistaEmpresa';
import { VistaProductos } from './VistaProductos';

export const FacturaApp = () => {
  const { id, descripcion, cliente, empresa, items } = getFactura();
  const { nombre, apellidos, direccion } = cliente;
  const { calle, numero, ciudad, estado, pais, cp } = direccion;

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
                <VistaCliente nombre={nombre} 
                              apellidos={apellidos}
                              calle={calle} 
                              numero={numero} 
                              ciudad={ciudad} 
                              estado={estado} 
                              pais={pais} 
                              cp={cp} 
                />
                {/* Componente cliente fin*/}
              </div>

              <div className="col">
                {/* Componente empresa ini*/}
                <VistaEmpresa nombre={empresa.nombre}
                              numeroFiscal={empresa.numeroFiscal}
                />
                {/* Componente empresa fin*/}
              </div>
            </div>

            {/* Componente productos ini*/}            
            <VistaProductos items={items}/>
            {/* Componente productos fin*/}

          </div>
        </div>
        {/* Card principal fin*/}
      </div>
    </>
  );
};
