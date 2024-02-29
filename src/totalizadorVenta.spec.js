import retornarCantidadItems from "./totalizadorVenta.js"

describe("Totalizador ventas", () => {

    it("Debería retornar que la cantidad de items comprados es 5 enviendo un parametro a la funcion", () => {
        expect(retornarCantidadItems(6)).toEqual(6);
    });

});
