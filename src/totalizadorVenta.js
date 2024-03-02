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
   if (resultadoPrecioNeto <1000) {
      return "No tiene descuento por cantidad"
   }
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

function obtenerPrecioNetoAplicandoDescuento(precioNeto,porcentajeDescuento){
   return precioNeto*porcentajeDescuento
}

function ObtenerDescuentosPorCategoria(Categoria){
   const Dosporciento = 0.02
   const CeroPorciento = 0
   const UnoPuntoCinco = 1.5
   const UnPorciento = 1
   
   if(Categoria === "Alimento"){
      return Dosporciento
   }
   if(Categoria === "Bebidas alcholicas"){
      return CeroPorciento
   }
   if(Categoria === "Materia de escritorio"){
      return UnoPuntoCinco
   }
   if(Categoria === "Muebles"){
      return CeroPorciento
   }
   if(Categoria === "Electronicos"){
      return UnPorciento
   }
   if(Categoria === "Vestimenta"){
      return CeroPorciento
   }
   if(Categoria === "Varios"){
      return CeroPorciento
   }
   
}

export  {ObtenerCantidadItems,ObtenerPrecioDeItem,obtenerPrecioNeto,sonValidosLaCantidadYPrecio,ObtenerDescuentos,obtenerPrecioNetoAplicandoDescuento,ObtenerDescuentosPorCategoria};