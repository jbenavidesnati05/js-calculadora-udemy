
function sumar(){
    const forma = document.getElementById("forma");
    let operandoA= forma["operandoA"];
    let operandoB= forma["operandoB"];
    let resultado= parseInt(operandoA.value) +parseInt(operandoB.value);
    if(isNaN(resultado)){
        document.getElementById("resultado").innerHTML=`Por favor ingrese los dos numeros¡¡¡`        
    }else{
    document.getElementById("resultado").innerHTML =`El Resultado de la Suma es: ${resultado}`;
    console.log(resultado)
    }
}

function restar(){
    let operandoA = parseInt(document.getElementById("operandoA").value)
    let operandoB = parseInt(document.getElementById("operandoB").value)
    let resultado = operandoA - operandoB;
    if(isNaN(resultado)){
        document.getElementById("resultado").innerHTML=`Por favor ingrese los dos numeros¡¡¡`        
    }else{
    document.getElementById("resultado").innerHTML =`El Resultado de la Resta es: ${resultado}`;
    console.log(resultado)
    }
}


function multiplicar(){
    let operandoA = parseInt(document.getElementById("operandoA").value)
    let operandoB = parseInt(document.getElementById("operandoB").value)
    let resultado = operandoA * operandoB;
    if(isNaN(resultado)){
        document.getElementById("resultado").innerHTML=`Por favor ingrese los dos numeros¡¡¡`        
    }else{
    document.getElementById("resultado").innerHTML =`El Resultado de la Multiplicación es: ${resultado}`;
    console.log(resultado)
    }
}

function dividir(){
    let operandoA = parseInt(document.getElementById("operandoA").value)
    let operandoB = parseInt(document.getElementById("operandoB").value)
    let resultado = operandoA / operandoB;
    if(isNaN(resultado)){
        document.getElementById("resultado").innerHTML=`Por favor ingrese los dos numeros¡¡¡`        

    }else{
    document.getElementById("resultado").innerHTML =`El Resultado de la Division es: ${resultado}`;
    console.log(resultado)
    }
}

function limpiar() {
    document.getElementById("forma").reset();
    document.getElementById("resultado").reset();
  }
