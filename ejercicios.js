//una cadena de texto con tu nombre
let nombre="Vanessa"

//Otra cadena de texto con tu Apellido
let apellido= "Cariñena"

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante= nombre.concat(" ").concat(apellido)
console.log(estudiante)

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudianteLength = estudiante.length
console.log(estudianteLength)

//Una variable que contenga la primera letra del Nombre
let nombrePrimera = nombre.substring(0, 1)
console.log(nombrePrimera)

//Otra variable que contenga la última letra del Apellido
let ultApellido = apellido.substring(apellido.length - 1, apellido.length)
console.log(ultApellido)

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudianteSinEspacios = estudiante.replace(/ /g, "")
console.log(estudianteSinEspacios)

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nombreEstudiante = estudiante.includes(nombre)
console.log(nombreEstudiante)