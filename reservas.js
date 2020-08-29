/*Estimado(a) [nombre y apellido del paciente], su hora para [especialidad] ha sido reservada para el
día [fecha] a las [hora]. Además, se le envió un mensaje a su correo [email] con el detalle de su cita.
Gracias por preferirnos*/

//variables
var formulario = document.getElementById("form");
var especialidad = document.getElementById("especialidad").value;
var hour = document.getElementById("time").value;


//funciones para validar


valRut = ()=> {
    const expRut = /^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/;
    var rut = document.getElementById("rut").value;
    if (expRut.test(rut)) {
        console.log("rut =>", expRut.test(rut));
    } else {
        alert("rut no valido" );
    }

}

valName = () => {
    const expName= /[a-z|A-Z|äöüßÄÖÜ]/i;
    var name =document.getElementById("name").value;
    if(expName.test(name)){
        console.log("=>", expName.test(name));
    return true;
    }else{
        alert("ingrese sólo letras");
        return false;
    }
    
    }

valLastName = ()=> {
    const expLastName= /[a-zA-ZäöüßÄÖÜ]/i;
    var lastName = document.getElementById("lastName").value;
    if(expLastName.test(lastName)){
        console.log("=>", expLastName.test(lastName));
    }else{
        alert("ingrese sólo letras");
    }
}

valAge = () => {
    const expAge= /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
    var age = document.getElementById("age").value;
    if(expAge.test(age)){
        console.log("=>", expAge.test(age));
    }else{
        alert("ingrese sólo números");
    }
    }

valEmail = () => {
    const expEmail = /[a-z 0-9]{1,100}\@[a-z]{1,10}\.[a-z]{2,3}$/mi;
    var email = document.getElementById("email").value;
    if (expEmail.test(email)) {
        console.log("=>", expEmail.test(email));
        
    } else {
        alert("correo inválido");
    }
}

valDate = () => {
    const expDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    var date = document.getElementById("date").value; 
    if (expDate.test(date)) {
        console.log("expr =>", expDate.test(date));
    } else {
        alert("formato de fecha inválido");
    }
}

formulario.addEventListener("submit", e=>{
    e.preventDefault();
    if (valRut()== false) {
        return false;
    } else if(valName()== false){
        return false;
    } else if(valLastName()== false){
        return false;
    }else if(valAge()== false){
        return false;
    }else if(valDate()== false){
        return false;
    }else{
        document.write(`<div> Estimado(a) ${name.value}  ${lastName.value},su hora ha sido reservada para el
        día ${date.value} a las ${hour}. Además, se le envió un mensaje a su correo ${email.value} con el detalle de su cita.
        Gracias por preferirnos.
        `)
    }
    
});

