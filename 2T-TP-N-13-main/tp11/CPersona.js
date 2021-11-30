class CPersona {
  constructor(nombre, edad, dni, genero, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.genero = genero;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    let imc = this.peso / Math.pow(this.altura, 2);
    let valor;
    if (imc < 20) {
      valor = -1;
    }
    if (imc >= 20 && imc <= 25) {
      valor = 0;
    }
    if (imc > 25) {
      valor = 1;
    }
    return valor;
  }
  esMayorDeEdad() {
    let condicion = false;
    if (this.edad >= 18) {
      condicion = true;
    } else {
      condicion = false;
    }
    return condicion;
  }
  gen() {
    let respuesta = "";
    let genMay = this.genero.value.toUpperCase();
    if (genMay == "M" || genMay == "F") {
      respuesta = "El genero ingresado es correcto";
    } else {
      respuesta = "El genero ingresado es incorrecto";
    }
    return respuesta;
  }
}

var nombre = prompt("Ingrese su nombre");
var edad = prompt("Ingrese su edad");
var dni = prompt("Ingrese su dni");
var genero = prompt("Ingrese su genero");
var altura = prompt("Ingrese su altura");
var peso = prompt("Ingrese su peso");

const p1 = new CPersona(nombre, edad, dni, genero, altura, peso);

var pesoIdeal = p1.calcularIMC();

var respuestaPesoIdeal = "";
var respuestaEsMayor = "";
switch (pesoIdeal) {
  case -1:
    respuestaPesoIdeal = "Usted está por debajo de su peso ideal";
    break;
  case 0:
    respuestaPesoIdeal = "Usted  está en su peso ideal";
    break;
  case 1:
    respuestaPesoIdeal = "Usted está por encima su peso ideal";
    break;
}
if (p1.esMayorDeEdad) {
  respuestaEsMayor = "Usted es mayor de edad";
} else {
  respuestaEsMayor = "Usted no es mayor de edad";
}

document.write("nombre:" + nombre + "<br>");

document.write("Dni:" + dni + "<br>");

document.write("Edad:" + edad + "<br>");

document.write("Genero:" + genero + "<br>");

document.write("Altura:" + altura + "<br>");

document.write("Peso:" + peso + "<br>");
document.write(respuestaPesoIdeal + "<br>" + respuestaEsMayor + "<br>");
