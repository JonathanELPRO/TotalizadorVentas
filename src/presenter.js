import {ObtenerCantidadItems,ObtenerPrecioDeItem, obtenerPrecioNeto,sonValidosLaCantidadElPrecioYPeso,obtenerPrecioNetoAplicandoDescuento, ObtenerDescuentos,ObtenerDescuentosPorCategoria,ObtenerImpuestoPorCategoria,obtenerPrecioNetoConDescuentoAplicandoImpuesto,ObtenerImpuestoPorEstado, ObtenerPesoVolumetrico, obtenerCostoDeEnvioPorUnidad, obtenerCostoEnvioNeto, obtenerDescuentoDeEnvioNetoPorTipoCliente,obtenerEnvioNetoAplicandoDescuento,obtenerDescuentoPor3Factores} from "./totalizadorVenta.js";

const cantidadItem = document.querySelector("#cantidadItem");
const precioItem = document.querySelector("#precioItem");
const categoriaItem=document.querySelector("#categoriaItem");
const codigoEstado=document.querySelector("#codigoEstado");
const pesoVolumetrico=document.querySelector("#pesoVolumetrico");
const tipoCliente=document.querySelector("#tipoCliente");
const form = document.querySelector("#totalizador-form");
const resultadoPrecioNeto = document.querySelector("#resultadoPrecioNeto");
const resultadoDescuentoPorPrecioNeto = document.querySelector("#resultadoDescuentoPorPrecioNeto");
const resultadoDescuentoPorcentualPorPrecioNeto=document.querySelector("#resultadoDescuentoPorcentualPorPrecioNeto");
const resultadoDescuentoPorCategoria = document.querySelector("#resultadoDescuentoPorCategoria");
const resultadoDescuentoPorcentualPorCategoria = document.querySelector("#resultadoDescuentoPorcentualPorCategoria");
const resultadoImpuestoPorCategoria = document.querySelector("#resultadoImpuestoPorCategoria");
const resultadoImpuestoPorcentualPorCategoria = document.querySelector("#resultadoImpuestoPorcentualPorCategoria");
const resultadoImpuestoPorcentualPorCodigoEstado=document.querySelector("#resultadoImpuestoPorcentualPorCodigoEstado");
const resultadoImpuestoPorCodigoEstado=document.querySelector("#resultadoImpuestoPorCodigoEstado");
const resultadoPrecioDeEnvioPorUnidad=document.querySelector("#resultadoPrecioDeEnvioPorUnidad");
const resultadoPrecioDeEnvioNeto=document.querySelector("#resultadoPrecioDeEnvioNeto");
const resultadoDescuentoPorcentualEnvioPorCliente=document.querySelector("#resultadoDescuentoPorcentualEnvioPorCliente")
const resultadoDescuentoEnvioPorCliente=document.querySelector("#resultadoDescuentoEnvioPorCliente")
const descuentoMontoFijo=document.querySelector("#descuentoMontoFijo")
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItemValue = ObtenerCantidadItems(Number.parseFloat(cantidadItem.value));
  const precioItemValue = ObtenerPrecioDeItem(Number.parseFloat(precioItem.value));
  const pesoVolumetricoValue=ObtenerPesoVolumetrico(Number.parseFloat(pesoVolumetrico.value))
  if (sonValidosLaCantidadElPrecioYPeso(precioItemValue,cantidadItemValue,pesoVolumetricoValue)){
    
    resultadoPrecioNeto.innerHTML = obtenerPrecioNeto(cantidadItemValue,precioItemValue).toString();
    console.log(resultadoPrecioNeto.textContent)
    if (ObtenerDescuentos(resultadoPrecioNeto.textContent)!=="No tiene descuento por precio neto"){
      resultadoDescuentoPorPrecioNeto.innerHTML = obtenerPrecioNetoAplicandoDescuento(Number.parseFloat(resultadoPrecioNeto.textContent),ObtenerDescuentos(resultadoPrecioNeto.textContent)).toString() ; 
      resultadoDescuentoPorcentualPorPrecioNeto.innerHTML=(ObtenerDescuentos(resultadoPrecioNeto.textContent)*100).toString()
    }
    else
    {
      resultadoDescuentoPorPrecioNeto.innerHTML = 0;
      resultadoDescuentoPorcentualPorPrecioNeto.innerHTML=0;
    }
    resultadoDescuentoPorCategoria.innerHTML = obtenerPrecioNetoAplicandoDescuento(Number.parseFloat(resultadoPrecioNeto.textContent),ObtenerDescuentosPorCategoria(categoriaItem.value)).toString() ; 
    resultadoDescuentoPorcentualPorCategoria.innerHTML=(ObtenerDescuentosPorCategoria(categoriaItem.value)*100).toString()
    
    resultadoImpuestoPorCategoria.innerHTML = obtenerPrecioNetoConDescuentoAplicandoImpuesto(Number.parseFloat(resultadoPrecioNeto.textContent)-Number.parseFloat(resultadoDescuentoPorPrecioNeto.textContent)-Number.parseFloat(resultadoDescuentoPorCategoria.textContent),ObtenerImpuestoPorCategoria(categoriaItem.value)).toString() ; 
    resultadoImpuestoPorcentualPorCategoria.innerHTML=(Number.parseInt(ObtenerImpuestoPorCategoria(categoriaItem.value)*100)).toString()

    resultadoImpuestoPorCodigoEstado.innerHTML = obtenerPrecioNetoConDescuentoAplicandoImpuesto(Number.parseFloat(resultadoPrecioNeto.textContent)-Number.parseFloat(resultadoDescuentoPorPrecioNeto.textContent)-Number.parseFloat(resultadoDescuentoPorCategoria.textContent),ObtenerImpuestoPorEstado(codigoEstado.value)).toString() ; 
    resultadoImpuestoPorcentualPorCodigoEstado.innerHTML=(Number.parseFloat(ObtenerImpuestoPorEstado(codigoEstado.value)*100)).toString()

    resultadoPrecioDeEnvioPorUnidad.innerHTML = obtenerCostoDeEnvioPorUnidad(pesoVolumetricoValue)
    resultadoPrecioDeEnvioNeto.innerHTML=obtenerCostoEnvioNeto(resultadoPrecioDeEnvioPorUnidad.textContent,cantidadItemValue)

    resultadoDescuentoPorcentualEnvioPorCliente.innerHTML = (obtenerDescuentoDeEnvioNetoPorTipoCliente(tipoCliente.value)*100)
    resultadoDescuentoEnvioPorCliente.innerHTML=obtenerEnvioNetoAplicandoDescuento(resultadoPrecioDeEnvioNeto.textContent,obtenerDescuentoDeEnvioNetoPorTipoCliente(tipoCliente.value))

    descuentoMontoFijo.innerHTML=obtenerDescuentoPor3Factores(tipoCliente.value,resultadoPrecioNeto.textContent,categoriaItem.value)
  }
  else{
    precioItem.value = "";
    cantidadItem.value="";
    pesoVolumetrico.value="";
    resultadoPrecioNeto.innerHTML = "<p>" +"Porfavor ingrese valores validos"+ "</p>";
  }
  
});