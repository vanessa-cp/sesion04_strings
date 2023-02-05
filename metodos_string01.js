//Metodos mas utilizados con cadenas de caracteres
//Como obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length)

//obtener partes de cadena de caracteres
//slice() substring() substr()

let slice_str= str.slice(5, 10)
console.log(slice_str)

let substring_str = str.substring(5, 10)
console.log(substring_str)

let substr_str= str.substr(5, 10)
console.log(substr_str)

let texto_largo = "El hotel del centro es el más antiguo del pueblo y también es aquel que tiene más comodidades. Este hotel fue construido en 1911, pero primero se utilizó como casa de familia. En 1975 un inversionista compró esta propiedad y la reformó para transformarla en el hotel que hoy conocemos. Es un hotel pequeño, pero cuenta con servicio a la habitación, con pileta climatizada, con un restaurante de categoría, entre otras cosas"
console.log(texto_largo.replace('el', 'cinco'))
console.log(texto_largo.replace(/el/g, 'cinco'))