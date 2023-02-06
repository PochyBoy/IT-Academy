const fs = require('fs')


let creacion= (async() => {
    try {
     fs.writeFile (`${__dirname}/texto.txt`,"Texto de Paul VP", (error)=>{
        
     })
        
    } catch (error) {
        console.log(error)
    }
})()



let escritura = (async ( )=>{
    try {
        fs.appendFile(`${__dirname}/texto.txt`,"\n Agregando linea al texto", (error)=>{

        })
    } catch (error) {
        console.error(error);
    }
})()



let lectura = async () => {
    try {
         fs.readFile(`${__dirname}/texto.txt`, 'utf-8', (error, data)=>{
            if(!error){
        console.log(data)

            }
        })
    } catch (error) {
        console.log(error)
    }
}

lectura()


