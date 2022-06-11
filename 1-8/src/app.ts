export function sumar(a:number, b:number) : number{
    return a+b;
}

export function getLevel(level : number) : string{
    let currentLevel: string
    if (level <= 40){
        currentLevel = "Junior"
    }else{
        if (level <= 85){ 
            currentLevel = "Semi Senior"
        }else{
            currentLevel = "Senior"
        }
    }
    return currentLevel
}

export function getType(random : number) : string | number {
    
    return random < 50 ? "Hola" : 100
}


export function saluadarTenico(){
    const level = 60;
    console.log(`Hola Antony tu nivel es ${getLevel(level)}`)
}