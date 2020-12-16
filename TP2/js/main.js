
// Datos de la tabla
let prendas=`{
 "ropa": [
  { 
    "Prenda": "Vestido corto al cuerpo",
    "Tela": "Algodon",
    "Colores": "Negro, gris",
    "Talles" : "S, M, L, XL "
  },
  {
    "Prenda": "Malla entera",
    "Tela": "Lycra",
    "Colores": "Negro, blanco, azul",
    "Talles" : "S, M, L, XL"
  },
  {
    "Prenda": "Vestido espalda descubierta",
    "Tela": "Lurex",
    "Colores": "Negro",
    "Talles" : "S, M, L, XL " 
  },
  {
    "Prenda": "Bikini",
    "Tela": "Lycra",
    "Colores": "Negro, blanco, rojo, rosa",
    "Talles" : "S, M, L, XL "
  },
  {   
    
    "Prenda": "Vestido morley largo",
    "Tela": "Lurex",
    "Colores": "Gris",
    "Talles" : "S, M, L, XL"
   }
  ]
}`


window.addEventListener("load",() => {
    processedData=JSON.parse(prendas);
    let arregloclave=Object.keys(processedData.ropa[0]);
    crearHeader(arregloclave);
    for (let i=0; i< processedData.ropa.length; i++)
        {
          crearTabla(processedData.ropa[i]);   
        }
agregarBoton();
});

/* filtros */

switchDropdown.addEventListener("click",()=> {cargarOpcionesFiltro(); filtroEl.classList.toggle('hidden');  if (filtroEl.classList.contains('hidden')) {limpiarTabla(); for (let i=0; i< processedData.ropa.length; i++)
    {crearTabla(processedData.ropa[i])}}});