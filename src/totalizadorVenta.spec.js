import {ObtenerCantidadItems,ObtenerPrecioDeItem, obtenerPrecioNeto, sonValidosLaCantidadElPrecioYPeso,ObtenerDescuentos,ObtenerDescuentosPorCategoria,ObtenerImpuestoPorCategoria,ObtenerImpuestoPorEstado,obtenerCostoDeEnvioPorUnidad,ObtenerPesoVolumetrico,obtenerCostoEnvioNeto,obtenerDescuentoDeEnvioNetoPorTipoCliente} from "./totalizadorVenta.js";

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
        expect(sonValidosLaCantidadElPrecioYPeso(10,20,30)).toEqual(true);
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
    it("Debería retornar un descuento del dos% ya que el categoria es Alimentos", () => {
        expect(ObtenerDescuentosPorCategoria('Alimentos')).toEqual(0.02);
    });
    it("Debería retornar un descuento del cero% ya que el categoria es Bebidas alcoholicas", () => {
        expect(ObtenerDescuentosPorCategoria('Bebidas alcoholicas')).toEqual(0);
    });
    it("Debería retornar un descuento del 1.5% ya que el categoria es Material de escritorio", () => {
        expect(ObtenerDescuentosPorCategoria('Material de escritorio')).toEqual(0.015);
    });
    it("Debería retornar un descuento del cero% ya que el categoria es Muebles", () => {
        expect(ObtenerDescuentosPorCategoria('Muebles')).toEqual(0);
    });
    it("Debería retornar un descuento del uno% ya que el categoria es Electronicos", () => {
        expect(ObtenerDescuentosPorCategoria('Electronicos')).toEqual(0.01);
    });
    it("Debería retornar un descuento del cero% ya que el categoria es Vestimenta", () => {
        expect(ObtenerDescuentosPorCategoria('Vestimenta')).toEqual(0);
    });
    it("Debería retornar un descuento del cero% ya que el categoria es Varios", () => {
        expect(ObtenerDescuentosPorCategoria('Varios')).toEqual(0);
    });
    it("Debería retornar un impuesto del cero% ya que la categoría es Alimentos", () => {
        expect(ObtenerImpuestoPorCategoria('Alimentos')).toEqual(0);
    });
    
    it("Debería retornar un impuesto del 7% ya que la categoría es Bebidas alcoholicas", () => {
        expect(ObtenerImpuestoPorCategoria('Bebidas alcoholicas')).toEqual(0.07);
    });
    
    it("Debería retornar un impuesto del 0% ya que la categoría es Material de escritorio", () => {
        expect(ObtenerImpuestoPorCategoria('Material de escritorio')).toEqual(0);
    });
    
    it("Debería retornar un impuesto del 3% ya que la categoría es Muebles", () => {
        expect(ObtenerImpuestoPorCategoria('Muebles')).toEqual(0.03);
    });
    
    it("Debería retornar un impuesto del 4% ya que la categoría es Electronicos", () => {
        expect(ObtenerImpuestoPorCategoria('Electronicos')).toEqual(0.04);
    });
    
    it("Debería retornar un impuesto del 2% ya que la categoría es Vestimenta", () => {
        expect(ObtenerImpuestoPorCategoria('Vestimenta')).toEqual(0.02);
    });
    
    it("Debería retornar un impuesto del 0% ya que la categoría es Varios", () => {
        expect(ObtenerImpuestoPorCategoria('Varios')).toEqual(0);
    });

    it("Debería retornar un impuesto del 6.65% ya que el estado es UT", () => {
        expect(ObtenerImpuestoPorEstado('UT')).toEqual(0.0665);
    });
    it("Debería retornar un impuesto del 8.00% ya que el estado es NV", () => {
        expect(ObtenerImpuestoPorEstado('NV')).toEqual(0.08);
    });
    it("Debería retornar un impuesto del 6.25% ya que el estado es TX", () => {
        expect(ObtenerImpuestoPorEstado('TX')).toEqual(0.0625);
    });
    it("Debería retornar un impuesto del 4.00% ya que el estado es AL", () => {
        expect(ObtenerImpuestoPorEstado('AL')).toEqual(0.04);
    });
    it("Debería retornar un impuesto del 8.25% ya que el estado es CA", () => {
        expect(ObtenerImpuestoPorEstado('CA')).toEqual(0.0825);
    });
    it("Debería retornar un costo de envio por unidad igual a 0$, probando con un valor de peso volumetrico igual a 5", () => {
        expect(obtenerCostoDeEnvioPorUnidad(5)).toEqual(0);
    });
    it("Debería retornar un costo de envio por unidad igual a 3.5$, probando con un valor de peso volumetrico igual a 15", () => {
        expect(obtenerCostoDeEnvioPorUnidad(15)).toEqual(3.5);
    });
    it("Debería retornar un costo de envio por unidad igual a 5$, probando con un valor de peso volumetrico igual a 31", () => {
        expect(obtenerCostoDeEnvioPorUnidad(31)).toEqual(5);
    });
    it("Debería retornar un costo de envio por unidad igual a 6.5$, probando con un valor de peso volumetrico igual a 90", () => {
        expect(obtenerCostoDeEnvioPorUnidad(90)).toEqual(6.5);
    });
    it("Debería retornar un costo de envio por unidad igual a 8$, probando con un valor de peso volumetrico igual a 199", () => {
        expect(obtenerCostoDeEnvioPorUnidad(199)).toEqual(8);
    });
    it("Debería retornar un costo de envio por unidad igual a 9$, probando con un valor de peso volumetrico igual a 1000", () => {
        expect(obtenerCostoDeEnvioPorUnidad(1000)).toEqual(9);
    });
    it("Deberia retornar el peso volumetrico que ingreso el usuario salvo pusiese algo erroneo", () => {
        expect(ObtenerPesoVolumetrico(2000)).toEqual(2000);
    });
    it("Deberia retornar el costo de envio neto igual a 15 dado que la cantidad de items es 3 y el costo de envio por unidad es de 5$", () => {
        expect(obtenerCostoEnvioNeto(5,3)).toEqual(15);
    });
    it("Deberia retornar un descuento porcentual del 0% en el costo de envio neto dado un cliente Normal", () => {
        expect(obtenerDescuentoDeEnvioNetoPorTipoCliente("Normal")).toEqual(0);
    });
    it("Deberia retornar un descuento porcentual del 0.5% en el costo de envio neto dado un cliente Recurrente", () => {
        expect(obtenerDescuentoDeEnvioNetoPorTipoCliente("Recurrente")).toEqual(0.005);
    });
    it("Deberia retornar un descuento porcentual del 1% en el costo de envio neto dado un cliente Antiguo recurrente", () => {
        expect(obtenerDescuentoDeEnvioNetoPorTipoCliente("Antiguo recurrente")).toEqual(0.01);
    });

    it("Deberia retornar un descuento porcentual del 1.5% en el costo de envio neto dado un cliente Especial", () => {
        expect(obtenerDescuentoDeEnvioNetoPorTipoCliente("Especial")).toEqual(0.015);
    });

    
})
