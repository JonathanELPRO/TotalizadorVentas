import {ObtenerCantidadItems,ObtenerPrecioDeItem, obtenerPrecioNeto,sonValidosLaCantidadYPrecio,obtenerPrecioNetoAplicandoDescuento, ObtenerDescuentos,ObtenerDescuentosPorCategoria} from "./totalizadorVenta.js";

const cantidadItem = document.querySelector("#cantidadItem");
const precioItem = document.querySelector("#precioItem");
const form = document.querySelector("#totalizador-form");
const resultadoPrecioNeto = document.querySelector("#resultadoPrecioNeto");
const resultadoDescuentoPorPrecioNeto = document.querySelector("#resultadoDescuentoPorPrecioNeto");
const resultadoDescuentoPorcentualPorPrecioNeto=document.querySelector("#resultadoDescuentoPorcentualPorPrecioNeto");

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
    
    
  }
  else{
    precioItem.value = "";
    cantidadItem.value="";
    resultadoPrecioNeto.innerHTML = "<p>" +"Porfavor ingrese valores validos"+ "</p>";
  }
  
});