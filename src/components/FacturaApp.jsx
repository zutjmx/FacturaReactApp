import { getFactura } from "../services/facturaService";

export const FacturaApp = () => {
    
    const {id,descripcion,cliente,empresa,items} = getFactura();
    const {nombre,apellidos,direccion} = cliente;
    const {calle,numero,ciudad,estado,pais,cp} = direccion;

    return (
        <>
            <h1>Ejemplo de Factura</h1>
            <ul className="list-group">
                <li className="list-group-item">Id: {id}</li>
                <li className="list-group-item">Id: {descripcion}</li>
            </ul>
            <h2>Datos Cliente</h2>
            <ul className="list-group">
                <li className="list-group-item">Nombre: {nombre}</li>
                <li className="list-group-item">Apellidos: {apellidos}</li>
                <li className="list-group-item">Calle: {calle}</li>
                <li className="list-group-item">Número: {numero}</li>
                <li className="list-group-item">Ciudad: {ciudad}</li>
                <li className="list-group-item">Estado: {estado}</li>
                <li className="list-group-item">País: {pais}</li>
                <li className="list-group-item">CP: {cp}</li>
            </ul>
            <h2>Datos Empresa</h2>
            <ul className="list-group">
                <li className="list-group-item">Nombre: {empresa.nombre}</li>
                <li className="list-group-item">N° Fiscal: {empresa.numeroFiscal}</li>
            </ul>
            <h3>Productos</h3>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>                    
                </thead>
                <tbody>
                    {items.map(({id,descripcion,precio,cantidad}) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{descripcion}</td>
                                <td>{precio}</td>
                                <td>{cantidad}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
