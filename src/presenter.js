import {ObtenerCantidadItems,ObtenerPrecioDeItem, obtenerPrecioNeto,sonValidosLaCantidadYPrecio} from "./totalizadorVenta.js";

const cantidadItem = document.querySelector("#cantidadItem");
const precioItem = document.querySelector("#precioItem");
const form = document.querySelector("#totalizador-form");
const resultadoPrecioNeto = document.querySelector("#resultadoPrecioNeto");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItemValue = ObtenerCantidadItems(Number.parseInt(cantidadItem.value));
  const precioItemValue = ObtenerPrecioDeItem(Number.parseInt(precioItem.value));
  if (sonValidosLaCantidadYPrecio(precioItemValue,cantidadItemValue)){
    resultadoPrecioNeto.innerHTML = "<p>" + obtenerPrecioNeto(cantidadItemValue,precioItemValue) + "</p>";
  }
  else{
    precioItem.value = "";
    cantidadItem.value="";
    resultadoPrecioNeto.innerHTML = "<p>" +"Porfavor ingrese valores validos"+ "</p>";
  }
  
});