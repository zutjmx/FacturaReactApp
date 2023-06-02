import { getFactura } from "../services/facturaService";

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
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Id: </strong>
                {id}
              </li>
              <li className="list-group-item">
                <strong>Descripción: </strong>
                {descripcion}
              </li>
            </ul>

            <div className="row">
              <div className="col">
                {/* Card de cliente ini*/}
                <div className="card my-3">
                  <div className="card-body">
                    <h5 className="card-title bg-success text-white">
                      Datos Cliente
                    </h5>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Nombre: </strong>
                      {nombre}
                    </li>
                    <li className="list-group-item">
                      <strong>Apellidos: </strong>
                      {apellidos}
                    </li>
                    <li className="list-group-item">
                      <strong>Calle: </strong>
                      {calle}
                    </li>
                    <li className="list-group-item">
                      <strong>Número: </strong>
                      {numero}
                    </li>
                    <li className="list-group-item">
                      <strong>Ciudad: </strong>
                      {ciudad}
                    </li>
                    <li className="list-group-item">
                      <strong>Estado: </strong>
                      {estado}
                    </li>
                    <li className="list-group-item">
                      <strong>País: </strong>
                      {pais}
                    </li>
                    <li className="list-group-item">
                      <strong>CP: </strong>
                      {cp}
                    </li>
                  </ul>
                </div>
                {/* Card de cliente fin*/}
              </div>

              <div className="col">
                {/* Card de empresa ini*/}
                <div className="card my-3">
                  <div className="card-body">
                    <h5 className="card-title bg-success text-white">
                      Datos Empresa
                    </h5>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Nombre: </strong>
                      {empresa.nombre}
                    </li>
                    <li className="list-group-item">
                      <strong>N° Fiscal: </strong>
                      {empresa.numeroFiscal}
                    </li>
                  </ul>
                </div>
                {/* Card de empresa fin*/}
              </div>
            </div>

            {/* Card de productos ini*/}
            <div className="card my-3">
              <div className="card-header">
                <h5 className="bg-info text-dark">Productos</h5>
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
            {/* Card de productos fin*/}

          </div>
        </div>
        {/* Card principal fin*/}
      </div>
    </>
  );
};
