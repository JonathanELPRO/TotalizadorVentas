import {ObtenerCantidadItems,ObtenerPrecioDeItem, obtenerPrecioNeto, sonValidosLaCantidadYPrecio,ObtenerDescuentos,ObtenerDescuentosPorCategoria} from "./totalizadorVenta.js";

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
    it("Debería retornar que el precio de item es 20 enviendo un parametro a la funcion solo que esta vez la funcion tiene una condicional que verifica que el precio de item sea mayor o igual a cero", () => {
        expect(ObtenerPrecioDeItem(20)).toEqual(20);
    });
    
    it("Debería retornar que el precio neto correcto entre la cantidad y el precio de los items es 15 enviando parametros a la funcion 5 y 3 ", () => {
        expect(obtenerPrecioNeto(5,3)).toEqual(15);
    });
    
    it("Debería retornar true si los valores de los campos son validos y false si son falsos", () => {
        expect(sonValidosLaCantidadYPrecio(10,20)).toEqual(true);
    });
    
    it("Debería retornar un descuento del tres% ya que el precio neto es mayor o igual a 1000 y menor a 3000", () => {
        expect(ObtenerDescuentos(1001)).toEqual(0.03);
    });

    it("Debería retornar un descuento del cinco% ya que el precio neto es mayor o igual a  3000 y menor a 7000", () => {
        expect(ObtenerDescuentos(4000)).toEqual(0.05);
    });

    it("Debería retornar un descuento del siete% ya que el precio neto es mayor o igual a  7000 y menor a 10000", () => {
        expect(ObtenerDescuentos(8000)).toEqual(0.07);
    });

    it("Debería retornar un descuento del diez% ya que el precio neto es mayor o igual a  10000 y menor a 30000", () => {
        expect(ObtenerDescuentos(11111)).toEqual(0.1);
    });
    it("Debería retornar un descuento del quince% ya que el precio neto es mayor o igual a  30000", () => {
        expect(ObtenerDescuentos(40000)).toEqual(0.15);
    });



});
