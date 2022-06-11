//Tipado 

    //Explicito
let raza : string = "XYZ";

    //Inferido
let apellido = "Macias";


//Constantes vs Var
var nombre = "Antony";
nombre = "Alexander";

const PAIS = "Ecuador";

//Tipos de Datos    
    //boplean
let isDone : boolean = true;
    //string
let text : string = "Hola";
    //number
let numero : number = 1234;
    //lista
let lista : string[] = ["a", "b"];
let lista2 : Array<number> = [1, 2, 3];
    //Tupla
let tupla : [string, number] = ["a", 1];
    //enum
enum Color {Red = "Rojo", Blue = 7, Yellow} ;
let colorCocina : Color = Color.Red;
    //any
let animal : any = "Perro";
animal = 123;


//Unon de tipos
let variosTipos : string | number;
variosTipos = 1234;
variosTipos = "1234";


//Alias de tipos
type idUser = number | string;
let idUsuario : idUser = "1234";
idUsuario = 1234;


//Tipos literales
type CardinbalDireccion = "Norte" | "Sur";
let puntoCardinal : CardinbalDireccion = "Norte";
puntoCardinal = "Sur";

//Interfaces=contrato
interface Persona {
    readonly id : string | number, //solo lectura
    name: string,
    ci: string,
    esMayor?: boolean //opcionales
    fullName?: () => string //funciones
}

let personaUsuario : Persona = {
    name: "Antony",
    ci: "0987654321",
    id: "1234567890",
    fullName() {
        return `${this.name} ${this.ci}`
    },
}

//Extender interfaces
interface Usuario extends Persona {
    correo: string
}

let personaUsuario2 : Usuario = {
    correo: "",
    id: "",
    name: "",
    ci: ""
}

//
let fullNam : string = `${personaUsuario2.name} ${personaUsuario2.ci}`;
//let fullName2 : string = personaUsuario.fullName();

//Funciones
function getsuma(uno : number, dos : number) : number{
    return uno + dos;
}

let suma1 : number = getsuma(1, 2);
    //Parametros opcionales
function mostrarNombres(a: string, b: string, c: string = "12345"): string{
    return `${a} ${b} ${c}`;
}

let instructor : string = mostrarNombres("Antony", "Alexander");

function getFullName(persona: Persona){
    return persona.name + persona.ci
}


//Clases
class Animal{
    nombre : string

    constructor(nombre: string){
        this.nombre = nombre
    }

    diHola(){
        console.log("Hola")
    }

    //constructor(public nombre: string){
//     
    //}
}

const animal3 = new Animal("Perro");

//Decoradores


//Destructuracion
let {esMayor, ci} = personaUsuario;
esMayor = false;
ci = "0987612345";

    //funciones
function getFullNamev2({name, ci}: Persona) : string{
    return name + ci;
}
    //arreglos
let elementos : number[] = [1,2,3,4];
console.log(elementos[0]); //1
console.log(elementos[1]); //2

let [primero] = elementos; //1

        //con estructuracion
let [primer, ...rest] = elementos //1,[2,3,4]


//spread
/*function foo(x:number,y:number,z:number){

}
foo(elementos[0], elementos[0], elementos[0])
foo(...elementos)*/

const perona_1 = {
    id: 1,
    name: "Antony",
}

const perfil_1 = {
    skills: ["JS", "Nada"],
}

    //ya no se usan
let persona_perfil = {
    id: perona_1.id,
    name: perona_1.name,
    skills: perfil_1.skills,
}
const perona_copy = JSON.parse(JSON.stringify(perona_1))
    //ahora se usa asi para copiar
let persona_perfi2 = {
    ...perona_1,
    ...perfil_1
}

let elementos1 :number[]= [1,2,3];
let elementos2 :number[]= [4,5];

let elementos_join : number[]
    //ya no se usa
elementos1.forEach(elemento => elementos_join.push(elemento))
elementos2.forEach(elemento => elementos_join.push(elemento))
    //ahora se usa asi
elementos_join = [...elementos1, ...elementos2]


//como importar un archivo json
// asignar a una variable