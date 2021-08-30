var data1;
var data2;
var result;

function calcularSuma() {
    var data1Element = document.getElementById("Data1");
    var data2Element = document.getElementById("Data2");

    data1 = data1Element.value;
    data2 = data2Element.value;

    console.log(data1);
    console.log(data2);

    result = parseFloat(data1) + parseFloat(data2);
    console.log(result);

    var resultElement = document.getElementById("resultado");
    resultElement.innerHTML = '<h3>' + 'Resultado Suma = ' + result + '</h3>';

}
function calcularResta() {
    var data1Element = document.getElementById("Data1");
    var data2Element = document.getElementById("Data2");
  
    data1 = data1Element.value;
    data2 = data2Element.value;
  
    console.log(data1);
    console.log(data2);
  
    result = parseFloat(data1) - parseFloat(data2);
    console.log(result);
  
    var resultElement = document.getElementById("resultado");
    resultElement.innerHTML = '<h3>' + 'Resultado Resta = ' + result + '</h3>';
  
  }
  function calcularMult() {
    var data1Element = document.getElementById("Data1");
    var data2Element = document.getElementById("Data2");
  
    data1 = data1Element.value;
    data2 = data2Element.value;
  
    console.log(data1);
    console.log(data2);
  
    result = parseFloat(data1) * parseFloat(data2);
    console.log(result);
  
    var resultElement = document.getElementById("resultado");
    resultElement.innerHTML = '<h3>' + 'Resultado Multiplicacion = ' + result + '</h3>';
  
  }
  function calcularDiv() {
    var data1Element = document.getElementById("Data1");
    var data2Element = document.getElementById("Data2");
  
    data1 = data1Element.value;
    data2 = data2Element.value;
  
    console.log(data1);
    console.log(data2);
  
    result = parseFloat(data1) / parseFloat(data2);
    console.log(result);
  
    var resultElement = document.getElementById("resultado");
    resultElement.innerHTML = '<h3>' + 'Resultado Division = ' + result + '</h3>';
  
  }
  function calcularX2() {
    var data1Element = document.getElementById("Data1");
    var data2Element = document.getElementById("Data2");
  
    data1 = data1Element.value;
    data2 = data2Element.value;
  
    console.log(data1);
    console.log(data2);
  
    result = Math.pow(data1,2);
    console.log(result);
  
    var resultElement = document.getElementById("resultado");
    resultElement.innerHTML = '<h3>' + 'Resultado Cuadrado = ' + result + '</h3>';
  
  }
  function calcularSqrt() {
    var data1Element = document.getElementById("Data1");
    var data2Element = document.getElementById("Data2");
  
    data1 = data1Element.value;
    data2 = data2Element.value;
  
    console.log(data1);
    console.log(data2);
  
    result = Math.sqrt(data1,2);
    console.log(result);
  
    var resultElement = document.getElementById("resultado");
    resultElement.innerHTML = '<h3>' + 'Resultado Raiz cuadrada = ' + result + '</h3>';
  
  }
  function calcularPow() {
    var data1Element = document.getElementById("Data1");
    var data2Element = document.getElementById("Data2");
  
    data1 = data1Element.value;
    data2 = data2Element.value;
  
    console.log(data1);
    console.log(data2);
  
    result = Math.pow(data1, data2);
    console.log(result);
  
    var resultElement = document.getElementById("resultado");
    resultElement.innerHTML = '<h3>' + 'Resultado Potencia ' + data2 + ' =' + result + '</h3>';
  
  }