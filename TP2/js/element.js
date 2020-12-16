
const tituloTabla=document.getElementById('titulo');
const titulo=document.getElementById('tituloModal');
const mensaje=document.getElementById('mensajeModal');
const aceptar=document.getElementById('btn-si');
const cancelar=document.getElementById('btn-no');
const tableEl=document.getElementById("table");
const progressBar=document.getElementById("progressBar");
const switchDropdown =document.getElementById('switch');
const filtroEl=document.getElementById('filtroTipo');
let bodyEl = document.createElement("tbody");
const overlayEl=document.getElementById('overlay');

// Variable con datos parseados
let processedData= new Array;

// Para agregar nuevas filas
let nuevaPrenda= {
    Prenda:"",
    Tela: "",
    Colores:"",
    Talles:""
    
}


const btnNewCustomer = document.getElementById('btn-new');
