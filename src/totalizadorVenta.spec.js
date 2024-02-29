import {ObtenerCantidadItems,ObtenerPrecioDeItem, obtenerPrecioNeto} from "./totalizadorVenta.js";

describe("Totalizador ventas", () => {

    it("Debería retornar que la cantidad de items comprados es 5 enviendo un parametro a la funcion", () => {
        expect(ObtenerCantidadItems(6)).toEqual(6);
    });
    it("Debería retornar que la cantidad de items comprados es 9 enviendo un parametro a la funcion solo que esta vez la funcion tiene una condicional que verifica que la cantidad de items sea mayor a cero", () => {
        expect(ObtenerCantidadItems(9)).toEqual(9);
    });
    it("Debería retornar que el precio de items es 10 enviando un parametro a la funcion ", () => {
        expect(ObtenerPrecioDeItem(10)).toEqual(10);
    });
    it("Debería retornar que el precio neto correcto entre la cantidad y el precio de los items de items es 10 enviando un parametro a la funcion ", () => {
        expect(ObtenerPrecioDeItem(20)).toEqual(20);
    });
    
    it("Debería retornar que el precio neto correcto entre la cantidad y el precio de los items de items es 10 enviando un parametro a la funcion ", () => {
        expect(obtenerPrecioNeto(5,3)).toEqual(15);
    });



});
