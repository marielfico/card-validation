import validator from './validator.js';

console.log(validator);

//VALIDAR INGRESO DE SÓLO NÚMEROS



let creditCardNumber= document.querySelector('#creditCardNumber');
creditCardNumber.addEventListener('keydown', isInputNumber);


function isInputNumber(e){

    if (isNaN(e.key) || e.code=='Space'){
       alert("Número inválido  " + e.key);
        e.preventDefault();
                        
    }
}




//VALIDAR EL NÚMERO DE TARJETA

let  btnValidator=document.getElementById('btnValidator')
btnValidator.addEventListener('click', validart);

  //FUNCIÓN LLAMADA AL PRESIONAR EL BOTÓN VALIDAR
function validart(){ 
    //GUARDAR EL NUMERO DE LA TARJETA
    let cardNumber=document.getElementById('creditCardNumber').value
    //GUARDAR EN UN ARRAY LOS NÚMEROS
    let arr1= Array.from(cardNumber)
   
   //VALIDAR NÚMERO DE TARJETA
    validator.isValid(arr1)
    
}
//ENMASCARAR
//guardar en una variable el boton enmascarar
let btnEnmascarar=document.getElementById('btnEnmascarar')
btnEnmascarar.addEventListener('click', enmascarar)


function enmascarar(){
//guardar el valor de la tarjeta

    let cardNumber=document.getElementById('creditCardNumber').value
    let arrayCardNumber=Array.from(cardNumber)
    validator.maskify(arrayCardNumber)
    
    //console.log('accediste a enmascarar')

}


























