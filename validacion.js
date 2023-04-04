const formulario = document.querySelector('.formcontato__form');

const inputs =document.querySelectorAll('input')

const expresiones ={
  name: /^[a-zA-ZA-Y\s]{1,40}$/,
  asunto: /^[a-zA-ZA-Y\s]{1,40}$/,
  correo :/^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
 }


 const validarFormularios=(event)=>{
 switch(event.target.name){
  case 'nombre':
  if(expresiones.name.test(event.target.value)){
    document.querySelector('.form__input-container').classList.remove("input-message-error__show");

  }
  else{
    document.querySelector('.form__input-container').classList.add("input-message-error__show");
    console.log("no");

  }
  break;

  case 'email':
  console.log('Funciona email' );
  break;

  case 'asunto':
  console.log('Funciona asunto');
  break;
 }
  
 }


 formulario.addEventListener('sumbmit', (event)=>{
    event.preventDefault();
 });


//Capturar eventos de los input
 inputs.forEach((input)=>{
  input.addEventListener('keyup', validarFormularios);
  input.addEventListener('blur', validarFormularios);

 })