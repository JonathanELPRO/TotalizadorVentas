import {ObtenerCantidadItems,ObtenerPrecioDeItem, obtenerPrecioNeto,sonValidosLaCantidadYPrecio,obtenerPrecioNetoAplicandoDescuento, ObtenerDescuentos} from "./totalizadorVenta.js";

const cantidadItem = document.querySelector("#cantidadItem");
const precioItem = document.querySelector("#precioItem");
const form = document.querySelector("#totalizador-form");
const resultadoPrecioNeto = document.querySelector("#resultadoPrecioNeto");
const resultadoDescuentoPorCantidad = document.querySelector("#resultadoDescuentoPorCantidad");
const resultadoDescuentoPorcentualPorCantidad=document.querySelector("#resultadoDescuentoPorcentualPorCantidad");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItemValue = ObtenerCantidadItems(Number.parseFloat(cantidadItem.value));
  const precioItemValue = ObtenerPrecioDeItem(Number.parseFloat(precioItem.value));
  if (sonValidosLaCantidadYPrecio(precioItemValue,cantidadItemValue)){
    
    resultadoPrecioNeto.innerHTML = obtenerPrecioNeto(cantidadItemValue,precioItemValue).toString();
    console.log(resultadoPrecioNeto.textContent)
    if (ObtenerDescuentos(cantidadItemValue)!=="No tiene descuento por cantidad"){
      resultadoDescuentoPorCantidad.innerHTML = obtenerPrecioNetoAplicandoDescuento(Number.parseFloat(resultadoPrecioNeto.textContent),ObtenerDescuentos(cantidadItemValue)).toString() ; 
      resultadoDescuentoPorcentualPorCantidad.innerHTML=(ObtenerDescuentos(cantidadItemValue)*100).toString()
    }
    else
    {
      resultadoDescuentoPorCantidad.innerHTML = 0;
      resultadoDescuentoPorcentualPorCantidad.innerHTML=0;
    }
    
    
  }
  else{
    precioItem.value = "";
    cantidadItem.value="";
    resultadoPrecioNeto.innerHTML = "<p>" +"Porfavor ingrese valores validos"+ "</p>";
  }
  
});