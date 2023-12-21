
// Show-menu-------------------------------------
document.addEventListener('DOMContentLoaded',()=>{
    const toggle=document.querySelector(".show-menu")
    
    toggle.addEventListener("click",()=>{
        
        const bar1=document.getElementById("toggle-bar1")
        const bar2=document.getElementById("toggle-bar2")
        const bar3=document.getElementById("toggle-bar3")
        const nav=document.getElementById("navbar")
        
        bar1.classList.toggle("toggle-bar--active1");
        bar2.classList.toggle("toggle-bar--active2");
        bar3.classList.toggle("toggle-bar--active3");
        nav.classList.toggle("nav--active")

        
    })
})
// ------------------------------------------------
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor()
  .typeString("")
  .pauseFor()
  .deleteChars(1)
  .start();


// ---Formulario--------------------------------------


var form=document.getElementById("formulario")
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  var nombreValido=validNombre()
  var apellidoValido=validApellido()
  var correoValido=validCorreo()
  var celularValido=validCelular()
  var mensajeValido=validMensaje()

  if(nombreValido&&apellidoValido&&correoValido&&celularValido&&mensajeValido){
    alert("Tu mensaje fué enviado con éxito")
    form.reset()
  }

})
const validNombre=()=>{
  var expRegNombres = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;
  
  var nombre=document.getElementById("nombre").value.trim();
  var nombreError=document.getElementById("nombre--error")

  if(!(nombre)){
    nombreError.innerHTML="Escriba su nombre";
    return false;
  }
  else if(nombre.length<6){
    nombreError.innerHTML="Escriba más de 5 caracteres";
    return false;
  }
  else if(!expRegNombres.exec(nombre)){
    nombreError.innerHTML="Este campo sólo admite letras";
    return false;
  }
  else{
    nombreError.innerHTML="";
  }
  return true;
}

const validApellido=()=>{
  var expRegNombres = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;

  var apellido=document.getElementById("apellido").value.trim();
  var apellidoError=document.getElementById("apellido--error");
  if(!apellido){
    apellidoError.innerHTML="Escriba su apellido";
    return false;
  }
  else if(apellido.length<6){
    apellidoError.innerHTML="Escriba más de 5 caracteres";
    return false;
  }
  else if(!expRegNombres.exec(apellido)){
    apellidoError.innerHTML="Este campo sólo admite letras";
    return false;
  }
  else{
    apellidoError.innerHTML="";
  }
  return true
}

const validCorreo=()=>{
  var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  var correo=document.getElementById("correo").value.trim();
  var correoError=document.getElementById("correo--error")
  if(!correo){
    correoError.innerHTML="Escriba su correo";
    return false;
  }
  else if(correo.length<5){
    correoError.innerHTML="Su correo debe tener al menos 5 caracteres";
    return false;
  }
  else if(!expRegEmail.exec(correo)){
    correoError.innerHTML="Ingrese un correo válido";
    return false;
  }
  else {
    correoError.innerHTML="";
  }
  return true
}

const validCelular=()=>{
  var expRegCelular = /^\+?[0-9]\s*[0-9]*$/;

  var celular=document.getElementById("celular").value.trim();
  var celularError=document.getElementById("celular--error");
  if(!celular){
    celularError.innerHTML="Escriba su celular"
    return false;
  }
  else if(!expRegCelular.exec(celular)){
    celularError.innerHTML="Escriba un celular válido"
    return false;
  }
  else{
    celularError.innerHTML=""
  }
  return true
}

const validMensaje=()=>{
  var mensaje=document.getElementById("mensaje").value;
  var mensajeError=document.getElementById("mensaje--error");
  if(!mensaje){
    mensajeError.innerHTML="Escriba un mensaje"
    return false;
  }
  else if(mensaje.length>256){
    mensajeError.innerHTML="Escriba hasta un máximo de 255 caracteres"
    return false;
  }
  else{
    mensajeError.innerHTML=""
  }
  return true
}

// Validación mensaje de error personalizado-----------------------------------
// const email = document.getElementById("correo");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity(
//       "Ingresa un correo válido",
//     );
//   } else {
//     email.setCustomValidity("");
//   }
// });
// ------------------------------------------------------------------------



