function ObtenerCantidadItems(cantidadItems) {
   if (cantidadItems > 0) {
       return cantidadItems;
   }else{
       return -1;
   }
  
}

function ObtenerPrecioDeItem(precioItem) {
   if(precioItem >= 0){
      return precioItem
   }else{
      return -1;
   }
  
}

export  {ObtenerCantidadItems,ObtenerPrecioDeItem};
