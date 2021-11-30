class CPassword {
  constructor(usuario, clave) {
    this.usuario = usuario;
    this.clave = clave;
    this.longitud = 10;
  }
  esFuerte() {
    let clave = this.clave;
    let claveMay = this.clave.toUpperCase();
    let claveMin = this.clave.toLowerCase();
    let condicion = false;
    let contNum = 0;
    let contMin = 0;
    let contMay = 0;

    for (let i = 0; i < this.longitud; i++) {
      if (isNaN(clave[i]) == false) {
        contNum++;
        continue;
      }

      if (clave[i] == claveMay[i] && isNaN(clave[i])) {
        contMay++;
        continue;
      }
      if (clave[i] == claveMin[i] && isNaN(clave[i])) {
        contMin++;
        continue;
      }
    }

    if (contMay >= 2 && contMin >= 3 && contNum >= 2) {
      condicion = true;
    }

    return condicion;
  }
  Chequearpassword(resultadoEsFuerte) {
    let resultado = "";
    if (resultadoEsFuerte) {
      resultado = " La contraseña ingresada cumple con los requisitos";
    } else {
      resultado = " La contraseña ingresada no cumple con los requisitos";
    }
    return resultado;
  }
}
var usuario = prompt("Ingrese su usuario");
var clave = prompt("Ingrese su contraseña");
const c1 = new CPassword(usuario, clave);
var resultado = c1.Chequearpassword(c1.esFuerte());
document.write(resultado);
