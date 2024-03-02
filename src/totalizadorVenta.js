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
   const DosPorciento = 0.02
   const CeroPorciento = 0
   const UnoPuntoCincoPorciento = 0.015
   const UnPorciento = 0.01
   
   if(Categoria === "Alimentos")
   {
      return DosPorciento
   }
   if(Categoria === "Bebidas alcoholicas")
   {
      return CeroPorciento
   }
   if(Categoria === "Material de escritorio")
   {
      return UnoPuntoCincoPorciento
   }
   if(Categoria === "Muebles")
   {
      return CeroPorciento
   }
   if(Categoria === "Electronicos")
   {
      return UnPorciento
   }
   if(Categoria === "Vestimenta")
   {
      return CeroPorciento
   }
   if(Categoria === "Varios")
   {
      return CeroPorciento
   }
}
function ObtenerImpuestoPorCategoria(Categoria) {

   const CeroPorciento = 0;
   const SietePorciento = 0.07;
   const TresPorciento = 0.03;
   const CuatroPorciento = 0.04;
   const DosPorciento = 0.02;

   if (Categoria === "Alimentos") 
   {
       return CeroPorciento;
   }
   if (Categoria === "Bebidas alcoholicas") 
   {
       return SietePorciento;
   }
   if (Categoria === "Material de escritorio") 
   {
       return CeroPorciento;
   }
   if (Categoria === "Muebles") 
   {
       return TresPorciento;
   }
   if (Categoria === "Electronicos") 
   {
       return CuatroPorciento;
   }
   if (Categoria === "Vestimenta") 
   {
       return DosPorciento;
   }
   if (Categoria === "Varios") 
   {
       return CeroPorciento;
   }
}

function obtenerPrecioNetoConDescuentoAplicandoImpuesto(precioNetoConDescuento,porcentajeImpuesto){
   return precioNetoConDescuento*porcentajeImpuesto
}

function ObtenerImpuestoPorEstado(CodigoEstado) {
   const UT = 0.0665;
   const NV = 0.08;
   const TX = 0.0625;
   const AL = 0.04;
   const CA = 0.0825;

   if (CodigoEstado === "UT") 
   {
      return UT;
   }else if (CodigoEstado === "TX") 
   {
      return TX;
   }else if (CodigoEstado === "NV") 
   {
      return NV;
   }
   else if (estado === "AL") 
   {
      return AL;
   } else if (estado === "CA") 
   {
      return CA;
   }
   else
   {
      return 0;
   }
}

export  {ObtenerCantidadItems,ObtenerPrecioDeItem,obtenerPrecioNeto,sonValidosLaCantidadYPrecio,ObtenerDescuentos,obtenerPrecioNetoAplicandoDescuento,ObtenerDescuentosPorCategoria,ObtenerImpuestoPorCategoria,obtenerPrecioNetoConDescuentoAplicandoImpuesto,ObtenerImpuestoPorEstado};