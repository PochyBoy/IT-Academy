//NIVEL 1
/* Ejercicio 1
Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari,
 usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.
*/

const _Persona = require("./1-3");


async function pintadoEmployeeData(id) {
  try {
    let employee = await _Persona.getEmployee2(id);
    //console.log("esto es " +  JSON.stringify(employee));
    let salary = await _Persona.getSalary2(employee);
    console.log(`Nombre: ${employee.name}, Salario: ${salary.Salario}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
pintadoEmployeeData(2);

/* Ejercicio 2 

Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.*/

async function promesaTime() {
  let result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("La promesa ha sido resuelta después de 5 segundos.");
    }, 5000);
  });

  return result;
}
promesaTime().then((result) => {
  console.log(result);
});

//NIVEL 2

/*Ejercicio 1
Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.
*/

function dobleRetraso(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
}

async function sumadenumerosDoble(a, b, c) {
  const doubleA = await dobleRetraso(a);
  const doubleB = await dobleRetraso(b);
  const doubleC = await dobleRetraso(c);
  return console.log(doubleA + doubleB + doubleC);
}

dobleRetraso(10).then((result) => console.log(result));
sumadenumerosDoble(5, 5, 5)

//NIVEL 3 Força i captura tants errors com puguis dels nivells 1 i 2.

function dobleRetraso2(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num !== "number") {
        reject(new Error("El parametro ha de ser un número"));
      } else {
        resolve(num * 2);
      }
    }, 2000);
  });
}

async function sumadenumerosDoble2(num1, num2, num3) {
  try {
    const doubleNum1 = await dobleRetraso2(num1);
    const doubleNum2 = await dobleRetraso2(num2);
    const doubleNum3 = await dobleRetraso2(num3);
    console.log(doubleNum1 + doubleNum2 + doubleNum3);
  } catch (error) {
    console.error(error);
  }
}

dobleRetraso2(10).then((result) => console.log(result));
sumadenumerosDoble2(5, 5, "uu")