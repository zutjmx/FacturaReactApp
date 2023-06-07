import { facturaDatos, generaNuevoIdItem, facturaVacia } from '../data/facturaDatos';

export const getFactura = () => {
    /* let total = 0;
    facturaDatos.items.forEach(item => {
        total = total + (item.precio * item.cantidad);
    }); */

    //Usando método reduce
    const total = calcularTotal(facturaDatos.items);
    return {...facturaDatos, total};
}

export const getNuevoIdItem = () => {
    return generaNuevoIdItem();
}

export const getFacturaVacia = () => {
    const total = 0;
    return {...facturaVacia,total};
}

export const calcularTotal = (items = []) => {
    return items
    .map(item => item.precio * item.cantidad)
    .reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}
