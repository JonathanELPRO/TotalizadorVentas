import recCantidadItenms from "./totalizadorVenta.js"

describe("Totalizador ventas", () => {
    it("Debería retornar que la cantidad de items comprados es 5 sin enviar ningún parámetro a la función usada", () => {
        expect(recCantidadItenms()).toEqual(5);
    });
});
