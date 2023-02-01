
//NIVEL 1
/* Ejercicio 1 */


import {getSalary2, getEmployee2} from './1-3'
async function pintadoEmployeeData(id) {
    try {
        let employee = await getEmployee2(id);
        let salary = await getSalary2(employee);
        console.log(`Nombre: ${employee.name}, Salario: ${salary.Salario}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
pintadoEmployeeData(2)

/* Ejercicio 2 */

async function promesaTime() {
    let result = await new Promise(resolve => {
      setTimeout(() => {
        resolve('La promesa ha sido resuelta después de 5 segundos.');
      }, 5000);
    });
  
    return result;
  }
  promesaTime().then(result => {
    console.log(result);
    });

    //NIVEL 2

    /*Ejercicio 1 */

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
    return doubleA + doubleB + doubleC;
  }

  dobleRetraso(10).then(result => console.log(result));
  sumadenumerosDoble(5, 5, 5).then(result => console.log(result));

  

    //NIVEL 3

    function dobleRetraso2(num) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof num !== 'number') {
                    reject(new Error('El parametro ha de ser un número'));
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
    
    
    dobleRetraso2(10).then(result => console.log(result));
    sumadenumerosDoble2(5, 5, 'uu').then(result => console.log(result));
    
  