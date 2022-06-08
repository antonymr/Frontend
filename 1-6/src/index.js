const fs = require('fs');

//const path = 'C:\\Users\\aamr_\\OneDrive\\Documentos\\Practicas\\Front\\1-6\\practica';
const path = require('path')
var anioActual = new Date().getFullYear();
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septioembre', 'Octubre', 'Nobiembre', 'Diciembre']

contenidoCarpeta();
crearCarpetas(2017);
contenidoCarpeta();


function contenidoCarpeta(folder=""){
    fs.readdir(path+folder, (error, files) => {
        if (!error){
            console.log(files);
        }else{
            console.log(error);
        }
    })
}


function crearCarpetas(anio){
    for (let index = anio; index <= anioActual; index++) {
        fs.mkdir(path+"\\"+index, (error) => {
            if(error){
                console.log(error);
            }
        });
        for (let indexMes = 0; indexMes < meses.length; indexMes++) {
            fs.mkdir(path+"\\"+index+"\\"+meses[indexMes], (error) =>{
                if(error){
                    console.log(error);
                }
            });
            var ultimoDia = new Date(index, indexMes+1, 0);
            for (let indexDia = 1; indexDia <= ultimoDia.getDate(); indexDia++) {
                fs.writeFile(path+"\\"+index+"\\"+meses[indexMes]+"\\"+indexDia+".txt","", (error) => {
                    if(error){
                        console.log(error)
                    }
                })
            }
        }
    }
}