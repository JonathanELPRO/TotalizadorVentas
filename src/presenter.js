import {ObtenerCantidadItems,ObtenerPrecioDeItem, obtenerPrecioNeto,sonValidosLaCantidadYPrecio,obtenerPrecioNetoAplicandoDescuento, ObtenerDescuentos,ObtenerDescuentosPorCategoria,ObtenerImpuestoPorCategoria,obtenerPrecioNetoConDescuentoAplicandoImpuesto,ObtenerImpuestoPorEstado} from "./totalizadorVenta.js";

const cantidadItem = document.querySelector("#cantidadItem");
const precioItem = document.querySelector("#precioItem");
const categoriaItem=document.querySelector("#categoriaItem");
const form = document.querySelector("#totalizador-form");
const resultadoPrecioNeto = document.querySelector("#resultadoPrecioNeto");
const resultadoDescuentoPorPrecioNeto = document.querySelector("#resultadoDescuentoPorPrecioNeto");
const resultadoDescuentoPorcentualPorPrecioNeto=document.querySelector("#resultadoDescuentoPorcentualPorPrecioNeto");
const resultadoDescuentoPorCategoria = document.querySelector("#resultadoDescuentoPorCategoria");
const resultadoDescuentoPorcentualPorCategoria = document.querySelector("#resultadoDescuentoPorcentualPorCategoria");
const resultadoImpuestoPorCategoria = document.querySelector("#resultadoImpuestoPorCategoria");
const resultadoImpuestoPorcentualPorCategoria = document.querySelector("#resultadoImpuestoPorcentualPorCategoria");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItemValue = ObtenerCantidadItems(Number.parseFloat(cantidadItem.value));
  const precioItemValue = ObtenerPrecioDeItem(Number.parseFloat(precioItem.value));
  if (sonValidosLaCantidadYPrecio(precioItemValue,cantidadItemValue)){
    
    resultadoPrecioNeto.innerHTML = obtenerPrecioNeto(cantidadItemValue,precioItemValue).toString();
    console.log(resultadoPrecioNeto.textContent)
    if (ObtenerDescuentos(resultadoPrecioNeto.textContent)!=="No tiene descuento por cantidad"){
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
  }
  else{
    precioItem.value = "";
    cantidadItem.value="";
    resultadoPrecioNeto.innerHTML = "<p>" +"Porfavor ingrese valores validos"+ "</p>";
  }
  
});