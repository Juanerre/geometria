function resultado (x) {
    return Number.parseFloat(x).toFixed(2);
}
// codigo para el cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
} 

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// codigo del circulo

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

function circunferencia(radio){
    const diametro = diametroCirculo(radio);
    return PI * diametro;
}

function AreaCirculo(radio){
    return (radio * radio) * PI;
}

//interacción con HTML
// llamamos el valor del input  del lado del cuadrado por su id y solo tomamos su valor:

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputSquare"); 
    const sideValue = input.value;
// con el valor del lado del cuadrado, llamamos la funcion que calcula el perimetro y con inner.text(funcion atributo) escribimos el parrafo que tiene ese id (ResultPerimeterSquare) concatenando texto más resultado de la var "perimetro"
    const perimetro = perimetroCuadrado(sideValue);
    ResultPerimeterSquare.innerText = "El Perímetro es: " + perimetro + "cm";
   
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputSquare");
    const sideValue = input.value;
    const area = areaCuadrado(sideValue);
    ResultAreaSquare.innerText = "El área es: " + area +" cm^2";   
}

// TRIANGULO RECTANGULO

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("sideA"); 
    const sideA = parseFloat(input1.value);
    const input2 = document.getElementById("sideB"); 
    const sideB = parseFloat(input2.value);
    const input3 = document.getElementById("sideBase");
    const sideBase = parseFloat(input3.value);
    const perimeter = perimetroTriangulo(sideA, sideB, sideBase);
    resultPerimetrerTriangle.innerText = "El perímetro es: " + perimeter + " cm";
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("sideBase");
    const sideBase = parseFloat(input3.value);
    const inputH = document.getElementById("heightTriangle");
    const heightT = parseFloat(inputH.value);
    const areaTriangle = areaTriangulo(sideBase, heightT);
    resultAreaTriangle.innerText = "El área es: " + areaTriangle + " cm^2";
}

//CIRCULO

function calculoPerimetroCirculo(){
    const input6 = document.getElementById("radius");
    const radiusValue = input6.value;
    const circlePerim = resultado(circunferencia(radiusValue));
    resultPerimetrerCircle.innerText = "El perímetro es: " + circlePerim + " cm";
}

function calcularAreaCirculo(){
    const input7 = document.getElementById("radius");
    const radiusValue = input7.value;
    const circleArea = resultado(AreaCirculo(radiusValue));
    resultAreaCircle.innerText = "El área es: " + circleArea + " cm^2";
}