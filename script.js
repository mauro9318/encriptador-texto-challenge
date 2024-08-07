
//Variables 
let enc = document.querySelector("#encriptar");
let desenc= document.querySelector("#desencriptar");
//let botonCopiar = document.querySelector("copiar");


//Función que permite borrar el contenido que se encuentra "input-area"
function inicializacion (){
    document.querySelector('#input-area').value='';
}

//Función que permite verificar que la comunicacíon entre usuario y programa funciona
function encriptacion(){
    console.log(enc)
    if(enc){
    console.log("FUNCIONA LA COMUNICACION")
    encriptarMensaje()
    }
    else{
        console.log("NO FUNCIONA")
    }
}
//Función que emplea el algoritmo de encriptación
function encriptarMensaje(){
    console.log("Funciona la funcion de encriptación");

    var mensaje = document.querySelector("#input-area").value;
    var secreto="";
    
    //if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje)  && mensaje.trim().length)
    if(mensaje != "" && !/[^a-z\s]/.test(mensaje)){
      
        console.log("El mensaje cumple con los requisitos");
        for(var i=0;i<mensaje.length;i++){
            switch(mensaje[i]){
                case "a":
                    secreto+="ai";
                    break;
                case "e":
                    secreto+="enter";
                    break;
                case "i":
                    secreto+="imes";
                    break;
                case "o":
                    secreto+="ober";
                    break;
                case "u":
                    secreto+="ufat";
                    break;
                default:
                    secreto+=mensaje[i];
            }
        }
        console.log(`El mensaje cifrado es: ${secreto}`);
        mostrarMensaje(secreto);
        inicializacion();
        //document.querySelector('#input-area').value='';
        document.querySelector("#copiar").style.display="inline-block"
        
    }
    else{
        console.log("El mensaje no cumple con los requisitos");
        var icono = "warning";
        var titulo = "Porfavor ingrese el texto en minúsculas, sin caracteres especiales y sin acentos";
        var botonConfirmacion = true;
        var tiempo = undefined;
    
        
        mostrarAlertas(icono, titulo, botonConfirmacion, tiempo)
        /*Swal.fire({
            position: "center",
            icon: "warning",
            title: "Porfavor ingrese el texto en minúsculas, sin caracteres especiales y sin acentos",
            showConfirmButton: true,
            //timer: 1500
          });*/


        //alert("Porfavor ingrese el texto en minúsculas y sin caratéres especiales");
        //document.querySelector('#input-area').value='';
        inicializacion();
    }
}
//Función que permite verificar que la comunicacíon entre usuario y programa funciona
function desencriptacion(){
    console.log(desenc)
    if(desenc){
        console.log("tambien funciona")
        desencriptarMensaje();
    }
    else{
        console.log("TAMPOCO FUNCIONA")
    }
}
//Función que emplea el algoritmo de desencriptación
function desencriptarMensaje(){
    var mensaje = document.querySelector("#input-area").value;
    var codigos= [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    var letras = ['a','e','i','o','u'];
    
    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
    
        for(var i=0;i<=4;i++){
            mensaje=mensaje.replaceAll(codigos[i], letras[i]);
        }

        console.log(`El mensaje cifrado es: ${mensaje}`);
        mostrarMensaje(mensaje);
        //document.querySelector('#input-area').value='';
        inicializacion();
        document.querySelector("#copiar").style.display="none"
        
    }

    else {
        //console.log("El mensaje no cumple con los requisitos")
        console.log("El mensaje no cumple con los requisitos");

        var icono = "warning";
        var titulo = "Porfavor ingrese el texto en minúsculas, sin caracteres especiales y sin acentos";
        var botonConfirmacion = true;
        var tiempo = undefined;
        mostrarAlertas(icono, titulo,botonConfirmacion,tiempo)

        /*Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Porfavor ingrese el texto en minúsculas, sin caracteres especiales y sin acentos",
            showConfirmButton: true,
            //timer: 1500
          });*/

        inicializacion();//REVISAR ESTO
    }
    
}
//Función que permite mostrar el mensaje encriptado y desencriptado
function mostrarMensaje(mensaje){

    var icono = "success";
    var titulo = "Se proceso el texto con éxito"
    var botonConfirmacion = false;
    var tiempo = 1500;
    mostrarAlertas(icono, titulo,botonConfirmacion,tiempo)
    
    
    /*Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se proceso el texto con éxito",
        showConfirmButton: false,
        timer:1500
      });*/

    document.querySelector("#output-area").innerHTML=mensaje;
}

function mostrarMensajeEncriptado(mensaje){
    document.querySelector("#input-area").value=mensaje
    
}
//Función que realiza el copiado el texto que se encuentra en el "output-area"
function copiarTexto(){
   
    var texto = document.querySelector("#output-area");
    
    texto.select();
    texto.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(texto.value);
    var mensaje2 = document.querySelector("#output-area").value;
    console.log(mensaje2)
    //alert("El texto ha sido copiado");

    var icono = "success";
    var titulo = "El texto ha sido copiado con éxito"
    var botonConfirmacion = true;
    var tiempo = undefined;
    mostrarAlertas(icono, titulo,botonConfirmacion,tiempo)

    /*Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El texto ha sido copiado con éxito",
        showConfirmButton: true,
    
      });*/

    mostrarMensajeEncriptado(mensaje2);
    
   
    
}
//Función que permite mostrar los mensajes de error y de información
function mostrarAlertas(icono, titulo, botonConfirmacion, tiempo){
    Swal.fire({
        position: "center",
        icon: icono,
        title: titulo,
        showConfirmButton: botonConfirmacion,
        timer: tiempo
      });

}
