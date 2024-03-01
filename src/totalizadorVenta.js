
function ObtenerCantidadItems(cantidadItems) {
   if (cantidadItems > 0) 
   {
       return cantidadItems;
   }
   return -1;
}

function ObtenerPrecioDeItem(precioItem) {
   if(precioItem >= 0)
   {
      return precioItem
   }
   return -1;
   
  
}

function obtenerPrecioNeto(precioItem,cantidadItem){
  return precioItem*cantidadItem;
}

function sonValidosLaCantidadYPrecio(precioItem,cantidadItem){
   return precioItem!==-1 && cantidadItem!==-1
}
   

export  {ObtenerCantidadItems,ObtenerPrecioDeItem,obtenerPrecioNeto,sonValidosLaCantidadYPrecio};
