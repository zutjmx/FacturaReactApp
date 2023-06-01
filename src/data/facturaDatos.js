import { faker } from '@faker-js/faker';

const generaDireccion = () => {
    const objDireccion = {
        calle: faker.location.street(),
        numero: faker.location.buildingNumber(),
        ciudad: faker.location.city(),
        estado: faker.location.state(),
        pais: faker.location.country(),
        cp: faker.location.zipCode()
    }
    return objDireccion;
}

const generaCliente = () => {
    const objCliente = {
        nombre: faker.person.firstName(),
        apellidos: faker.person.lastName(),
        direccion: generaDireccion()
    }
    return objCliente;
}

const generaEmpresa = () => {
    const objEmpresa = {
        nombre: faker.company.name(),
        numeroFiscal: faker.finance.accountNumber()
    }
    return objEmpresa;    
}

const generaItemsArray = () => {
    let itemsArray = [];
    for (let index = 0; index < 10; index++) {
        const objItem = {
            id: faker.number.int({min:1000,max:2000}),
            descripcion: faker.commerce.product().toUpperCase(),
            precio: faker.number.int({min:200,max:2000}),
            cantidad: faker.number.int({min:10,max:30}),
        }
        itemsArray.push(objItem);
    }
    return itemsArray;
}

export const facturaDatos = {
    id: faker.number.int({min:100,max:500}),
    descripcion: faker.word.words({count: 4}).toUpperCase(),
    cliente: generaCliente(),
    empresa: generaEmpresa(),
    items: generaItemsArray()
}
