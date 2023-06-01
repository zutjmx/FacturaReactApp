import { getFactura } from "../services/facturaService";

export const FacturaApp = () => {
    
    const {id,descripcion,cliente,empresa,items} = getFactura();
    const {nombre,apellidos,direccion} = cliente;
    const {calle,numero,ciudad,estado,pais,cp} = direccion;

    return (
        <>
            <h1>Ejemplo de Factura</h1>
            <ul>
                <li>Id: {id}</li>
                <li>Id: {descripcion}</li>
            </ul>
            <h2>Datos Cliente</h2>
            <ul>
                <li>Nombre: {nombre}</li>
                <li>Apellidos: {apellidos}</li>
                <li>Calle: {calle}</li>
                <li>Número: {numero}</li>
                <li>Ciudad: {ciudad}</li>
                <li>Estado: {estado}</li>
                <li>País: {pais}</li>
                <li>CP: {cp}</li>
            </ul>
            <h2>Datos Empresa</h2>
            <ul>
                <li>Nombre: {empresa.nombre}</li>
                <li>N° Fiscal: {empresa.numeroFiscal}</li>
            </ul>
            <h3>Productos</h3>
            <table>
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
