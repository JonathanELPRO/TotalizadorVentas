import {ObtenerCantidadItems,ObtenerPrecioDeItem} from "./totalizadorVenta.js";

describe("Totalizador ventas", () => {

    it("Debería retornar que la cantidad de items comprados es 5 enviendo un parametro a la funcion", () => {
        expect(ObtenerCantidadItems(6)).toEqual(6);
    });
    it("Debería retornar que la cantidad de items comprados es 9 enviendo un parametro a la funcion solo que esta vez la funcion tiene una condicional que verifica que la cantidad de items sea mayor a cero", () => {
        expect(ObtenerCantidadItems(9)).toEqual(9);
    });
    it("Debería retornar que el precio de items es 10 enviando un parametro a la funcion ", () => {
        expect(ObtenerCantidadItems(10)).toEqual(10);
    });
    it("Debería retornar que el precio de items es 20 enviando un parametro a la funcion y verificando que el precio es mayor o igual a 0", () => {
        expect(ObtenerPrecioDeItem(20)).toEqual(20);
    });


});
