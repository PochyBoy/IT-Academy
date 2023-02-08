const fs = require("fs");
const zlib = require("zlib");
const { exec } = require('child_process');
const crypto = require("crypto");


/**Nivel 1 */

/*Pregunta 1
Crea una funció que, en executar-la, escrigui una frase en un fitxer. */
let creacion = (async () => {
  try {
    fs.writeFile(`${__dirname}/texto.txt`, "Texto de Paul VP", (error) => {});
  } catch (error) {
    console.log(error);
  }
})();

let escritura = (async () => {
  try {
    fs.appendFile(
      `${__dirname}/texto.txt`,
      "\n Agregando linea al texto",
      (error) => {}
    );
  } catch (error) {
    console.error(error);
  }
})();
/** Pregunta 2
 * Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
 */
let lectura = async () => {
  try {
    fs.readFile(`${__dirname}/texto.txt`, "utf-8", (error, data) => {
      if (!error) {
        console.log(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

lectura();

/**Ejercicio 3 */
let comprimir = async () => {
  const archivo = fs.createReadStream(`${__dirname}/texto.txt`);
  const comprimido = fs.createWriteStream(`${__dirname}/texto.txt.gz`);
  const compresor = zlib.createGzip();
  await archivo.pipe(compresor).pipe(comprimido);
};

comprimir();


/**Nivel 2 */




async function Imprimirmsj(delay = 1000) {
    const message = await fs.promises.readFile(`${__dirname}/texto.txt`, 'utf-8');
    
    setTimeout(() => {
      console.log(message);
      Imprimirmsj(delay);
    }, delay);
  }
  
  Imprimirmsj();
  

function listDirectory() {
    exec('ls ~', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }
  
  listDirectory();
  


  async function codificarTexto(file) {
    try {
      const data = await fs.promises.readFile(file, "utf-8");
      
      function asciiAHexadecimal(texto) {
        let resultado = [];
    
        for(let i = 0; i < texto.length; ++i) {
            let hexadecimal = Number(texto.charCodeAt(i)).toString(16);
    
            resultado.push(hexadecimal);
        }
    
        return resultado.join('');
    }
      
      await fs.promises.writeFile(`${file}.hex`, asciiAHexadecimal(data));
  
      const base64Encoded = btoa(data)
      await fs.promises.writeFile(`${file}.base64`, base64Encoded);
      return console.log("Las dos codificaciones han sido completadas");
    } catch (error) {
      console.error(error);
    }
  }
  
  codificarTexto(`${__dirname}/texto.txt`);
  
  
  