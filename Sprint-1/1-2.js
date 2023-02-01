

//Nivel 1

/** Ejercicio 1 **/

let suma = (numero1,numero2) => {
    console.log(numero1 + numero2)
}

suma (5, 20)


//Nivel 2
/** Ejercicio 1 **/

let nombre = (nombre) => {
    let objeto = {nombre: nombre}

    console.log(objeto)
}

nombre('Paul Vargas Portugal')

/** Ejercicio 2 **/

class Persona {
    constructor(nombre){
        this.nombre = nombre
        
    }
    get Nombre(){
        return this.muestraNombre()
    }
    
    muestraNombre(){
        return console.log(this.nombre)
    }

}

const Paul = new Persona ('Paul')

Paul.Nombre



//Nivel 3
class Cursos {
    constructor(back, front) {
      this.back = back;
      this.front = front;
    }
  }
  
  function creadorObjetos( backend, frontend) {
     return new Cursos( backend, frontend );
  }
  console.log(creadorObjetos('NodeJs', 'React'))
  
  console.log(creadorObjetos('Java', 'Angular'))
