//Metodos de cadena de texto parte 2
let imput = "Escorpio"
let db = "escorpio"

//tolowerCase() - toUpperCase()
console.log(imput.toLowerCase())
console.log(imput.toUpperCase())
console.log(imput.toLowerCase() === db.toLowerCase())
console.log(imput.toUpperCase() === db.toUpperCase())

//Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera"
let str_2 = "Yo la segunda"

console.log(str_1.concat("", str_2))
console.log(str_1 + "" + str_2)
console.log(`${str_1} ${str_2}`)


//eliminar espacios al inicio y al final
let str_3 = "   Hola soy un string  "
console.log(str_3.length)//
// trim()
console.log(str_3.trim().length)//elimina los caracteres del principio y el final 
console.log(str_3.trimStart().length)//elimina los espacios del principio
console.log(str_3.trimEnd().length)//elimina los espacios del final

//Obtener el caracter que hay en cierta posicion

let str_4 = "Hola soy el string"// ["H", "o", "l", "a", "", "s"........]

console.log(str_4.charAt(5))
console.log(str_4[5])//tratado como una lista

//obtener la posicio de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Vanessa y me gusta. Mi nombre es Vanessa y mi apellido es Cariñena "
console.log(str_5.indexOf("Vanessa"))
console.log(str_5.charAt(9))

console.log(str_5.lastIndexOf("Vanessa"))//nos pasa la ultima 
