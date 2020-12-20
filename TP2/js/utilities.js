
// HEADER

let crearHeader=(arregloclave)=>{
    let trEl= document.createElement("tr");
    for (let i=0; i<arregloclave.length; i++) {
                let thEl=document.createElement("th");
                thEl.innerHTML=arregloclave[i];
                trEl.appendChild(thEl);
            };
            tableEl.appendChild(trEl);
            // Creamos la celda editar
            let thEd=document.createElement("th");
            thEd.innerHTML="Editar";
                trEl.appendChild(thEd);
                bodyEl.appendChild(trEl);
             // Creamos la celda eliminar
             let thElm=document.createElement("th");
             thElm.innerHTML="Borrar";
                 trEl.appendChild(thElm);
                 bodyEl.appendChild(trEl);
}
// tabla en blanco
function limpiarTabla(){
    bodyEl.innerHTML="";
}

// Valores del objeto
let crearTabla=(ropa)=>{
    let trEl= document.createElement("tr");
for ( key in ropa) {
    let tdEl=document.createElement("td");
    tdEl.innerHTML= ropa[key];
    trEl.appendChild(tdEl);
    bodyEl.appendChild(trEl)
}
tableEl.appendChild(bodyEl);

// BOTON EDITAR
let botonEditar=document.createElement("td");
botonEditar.innerHTML= "Editar";
botonEditar.classList.add("botonesTabla");
 trEl.appendChild(botonEditar);
botonEditar.addEventListener("click",(event)=>{event.preventDefault();
showModalEditar(event.path[1])});

// BOTON ELLIMINAR
let botonEliminar=document.createElement("td");
botonEliminar.innerHTML= "Eliminar";
botonEliminar.classList.add("botonesTabla");
    trEl.appendChild(botonEliminar);
    botonEliminar.addEventListener("click",(event)=>{event.preventDefault();showModalEliminar(event.path[1])});
    

}

// BOTON AGRAGAR
 agregarBoton = () => {
    let div=document.getElementById("divBoton");
    let boton= document.createElement("button");
    div.appendChild(boton);
    boton.addEventListener("click",(event)=>{event.preventDefault();showModalAgregar()});
    boton.classList.add("bg-color");
    boton.classList.add("btn");
    boton.innerHTML="Agregar";
}

// Modal eliminar fila
 showModalEliminar = (fila) => {
    titulo.innerHTML= "Eliminar";
    mensaje.innerHTML= "¿Esta seguro de que quiere eliminar la fila?";
    aceptar.innerHTML= "Aceptar";
    cancelar.innerHTML= "Cancelar";
    aceptar.addEventListener("click",()=>{eliminarFila ( fila)}, { once: true });
    cancelar.addEventListener("click",cancelarModal, { once: true });
    overlayEl.classList.remove('display-none');

}


// Elimina la fila
 eliminarFila = (fila) => {
    cancelar.removeEventListener("click",cancelarModal, { once: true });
    progressBar.classList.add('final');
  setTimeout(()=>{
    overlayEl.classList.add('display-none');
    progressBar.classList.remove('final');
    bodyEl.removeChild(fila);
    },2000);
}

// Cancela el modal
cancelarModal  = () => {
    overlayEl.classList.add('display-none')
}

// Modal editar fila
showModalEditar = (fila) => {
    titulo.innerHTML= "Editar";
    mensaje.innerHTML= "Igrese los datos actualizados :";
    let form=document.createElement("form");
    form.classList.add('container', 'padding', 'margin');
    mensaje.appendChild(form);
let prenda = document.createElement("INPUT");
     prenda.setAttribute("type", "text");
     prenda.value = fila.cells[0].innerHTML;
     prenda.classList.add('margin');
     form.appendChild(prenda);
let tela = document.createElement("INPUT");
     tela.setAttribute("type", "text");
     tela.value = fila.cells[1].innerHTML;
     tela.classList.add('margin');
     form.appendChild(tela);
let colores = document.createElement("INPUT");
     colores.setAttribute("type", "text");
     colores.value = fila.cells[2].innerHTML;
     colores.classList.add('margin');
     form.appendChild(colores);
let talles= document.createElement("INPUT");
     talles.setAttribute("type", "text");
     talles.value = fila.cells[3].innerHTML;
     talles.classList.add('margin');
     form.appendChild(talles);
    aceptar.innerHTML= "Aceptar";
    cancelar.innerHTML= "Cancelar";
    overlayEl.classList.remove('display-none');
    aceptar.addEventListener("click",()=>{modificarfila ( prenda, tela, colores, talles)}, { once: true });
    cancelar.addEventListener("click",()=>overlayEl.classList.add('display-none'), { once: true })
}
// Edita los datos
 modificarfila = (fila, prenda, tela, colores, talles) => {
    progressBar.classList.add('final');

  setTimeout(()=>{
    overlayEl.classList.add('display-none');
    progressBar.classList.remove('final');
    fila.cells[0].innerHTML=prenda.value;
    fila.cells[1].innerHTML=tela.value;
    fila.cells[2].innerHTML=colores.value;
    fila.cells[3].innerHTML=talles.value;
  },2000);
}


// Modal agregar fila
 showModalAgregar = () => {
    titulo.innerHTML= "Agregar";
    mensaje.innerHTML= "Inserte datos:";
    let form=document.createElement("form");
    form.classList.add('container', 'padding', 'margin');
    mensaje.appendChild(form);
let prenda=document.createElement("INPUT");
    prenda.setAttribute("type", "text");
    prenda.placeholder='Prenda';
    prenda.classList.add('margin');
    form.appendChild( prenda);
let tela=document.createElement("INPUT");
    tela.setAttribute("type", "text");
    tela.placeholder='Tela';
    tela.classList.add('margin');
    form.appendChild(tela);
let colores =document.createElement("INPUT");
    colores.setAttribute("type", "text");
    colores.placeholder='Colores';
    colores.classList.add('margin');
    form.appendChild(colores);
let talles=document.createElement("INPUT");
    talles.setAttribute("type", "text");
    talles.classList.add('margin');
    talles.placeholder='Talles';
    form.appendChild(talles);
    aceptar.innerHTML= "Aceptar";
    cancelar.innerHTML= "Cancelar";
    overlayEl.classList.remove('display-none');
    aceptar.addEventListener("click",function(){insertarDato ( prenda, tela, colores, talles)}, { once: true});
    cancelar.addEventListener("click",()=>overlayEl.classList.add('display-none'), { once: true }); 
}

// Agrega el dato modificado
 insertarDato = (prenda, tela, colores, talles) => {
    progressBar.classList.add('final');
    setTimeout(()=>{
      overlayEl.classList.add('display-none');
      progressBar.classList.remove('final');
      nuevaPrenda.Prenda = prenda.value;
      nuevaPrenda.Tela = tela.value;
      nuevaPrenda.Colores = colores.value;
      nuevaPrenda.Talles = talles.value;
    crearTabla(nuevaPrenda);
  },2000);   
}


 cargarOpcionesFiltro = () => {
let opciones= new Set(processedData.ropa.map(elem=>{return elem.Tela}));
console.log(processedData.ropa);

filtroEl.innerHTML='';
let opcionEl=document.createElement('option');
opcionEl.value='';
opcionEl.innerHTML='Filtrar por Tela';
opcionEl.setAttribute('disabled','true');
opcionEl.setAttribute('selected','true');
filtroEl.appendChild(opcionEl);
opciones.forEach(elem=>{
  let opcionEl=document.createElement('option');
  opcionEl.value=elem;
  opcionEl.innerText=elem;
  filtroEl.appendChild(opcionEl);
})
console.log(opciones);
}


filtroEl.addEventListener('change', ()=>{
    limpiarTabla();
let datosFiltrados=processedData.ropa.filter(elem=>{return elem.Tela==filtroEl.value});
for (let i=0; i< datosFiltrados.length; i++)
{
    crearTabla(datosFiltrados[i]);   
}})

