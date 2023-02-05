//Metodos de cadena de texto (parte 3)
//https://regexr.com

let texto_largo = "La actividad del sector turístico ha aumentado considerablemente en la ciudad y esto ha generado muy buenos ingresos para las personas que trabajan en este sector. Esta mejora es una consecuencia de que el gobierno haya organizado mejor el circuito turístico y de que haya hecho campañas de difusión de los lugares que se pueden visitar."

console.log(texto_largo.match(/no/g))

//para ver si contiene esa palabra
console.log(texto_largo.includes("sector"))
console.log(texto_largo.includes("terremoto"))

//saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("La actividad del"))

//saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("arboles"))
