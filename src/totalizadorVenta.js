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

function ObtenerDescuentos(resultadoPrecioNeto)
{
   const tresPorciento = 0.03
   const cincoPorciento = 0.05
   const sietePorciento = 0.07
   const diezPorciento = 0.1
   const quincePorciento= 0.15
   if(resultadoPrecioNeto >= 1000 && resultadoPrecioNeto < 3000)
   {
      return tresPorciento 
   }
   if(resultadoPrecioNeto >= 3000 && resultadoPrecioNeto < 7000)
   {
      return cincoPorciento 
   }
   if(resultadoPrecioNeto >= 7000 && resultadoPrecioNeto < 10000)
   {
      return sietePorciento 
   }
   if(resultadoPrecioNeto >= 10000 && resultadoPrecioNeto < 30000)
   {
      return diezPorciento 
   }
   if(resultadoPrecioNeto >= 30000)
   {
      return quincePorciento 
   }
}

export  {ObtenerCantidadItems,ObtenerPrecioDeItem,obtenerPrecioNeto,sonValidosLaCantidadYPrecio,ObtenerDescuentos};