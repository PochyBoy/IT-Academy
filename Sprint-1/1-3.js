//NIVEL 1
/* Ejercicio 1*/

let Alumno = false;

const aula = new Promise((resolve, reject) => {
  let mensaje = "";
  if (Alumno) {
    mensaje = "Existe al menos un alumno en el salon";
    resolve(mensaje);
  } else {
    reject(new Error("No existe alumnos en el salon"));
  }
});

aula
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error.message));

/*Ejercicio2 */

function consologiar(parametro) {
  console.log(`El area del cuadrado es ${parametro * parametro}`);
}

let area = (numero, callback) => {
  callback(numero);
};

area(6, consologiar);

//NIVEL 2

let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

/* Ejercicio 1*/

let getEmpoyee = (ide) => {
  return new Promise((resolve, reject) => {
    let prueba = employees.find((item) => item.id == ide);
    if (prueba != undefined) {
      resolve(`El nombre del empleado es ${prueba.name}`);
    } else {
      reject(new Error("No existe este empleado"));
    }
  });
};
getEmpoyee(3)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error.message));

/* Ejercicio 2*/
let getSalary = (objeto) => {
  return new Promise((resolve, reject) => {
    let prueba = salaries.find((item) => item.id == objeto.id);
    if (prueba != undefined) {
      resolve(`El salario es: ${prueba.salary}`);
    } else {
      reject(new Error("No existe este empleado"));
    }
  });
};
getSalary(employees[1])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error.message));

/*Ejercicio 3 */

const getEmployee2 = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let employee = employees.find((employee) => employee.id === id);
      if (employee) {
        resolve(employee);
      } else {
        reject(`No se ha encontrado el trabajador con el ID: ${id}`);
      }
    }, 1000);
  });
};
exports.getEmployee2 = getEmployee2;

const getSalary2 = (employee) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let salary = salaries.find((salary) => salary.id === employee.id);
      if (salary) {
        resolve({
          Nombre: employee.name,
          Salario: salary.salary,
        });
      } else {
        reject(`No se ha encontrado dato alguno sobre el ID: ${employee.id}`);
      }
    }, 1000);
  });
};
exports.getSalary2 = getSalary2;
getEmployee2(2)
  .then((employee) => getSalary2(employee))
  .then((employeeWithSalary) => console.log(employeeWithSalary));

//NIVEL 3
getEmployee2(5)
  .then((employee) => getSalary(employee))
  .then((result) =>
    console.log(
      `El nombre del empleado es ${result.Nombre} y su salario es ${result.Salario}`
    )
  )
  .catch((error) => {
    console.error(`Ha ocurrido un error: ${error}`);
  });
