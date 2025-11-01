// var, let, const
// "cadenas", 'cadenas', `cadenas ${variable}`
// boleanos: true, false
// 2, 2.1, -2, 2.5
// null, undefined, NaN
// nombre_funcion()=>{}, function()
// new Set, new Map, Array [], Object {}, [...new Set(valores_repetidos)],
// ciclos for, while, for...of, for...in
// if, else if, else, switch
// try, catch, finally
// find, filter, map, reduce


const contenedor = document.querySelector("#contenedor")


console.log("contenedor", contenedor);

libros = [
  {
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "genero": "Realismo Mágico",
    "precio": 14.99,
    "resumen": "Narra la historia de siete generaciones de la familia Buendía en el pueblo ficticio de Macondo, explorando temas de soledad, destino e incesto.",
    "imagen": "cien_años_soledad.jpg"
  },
  {
    "titulo": "1984",
    "autor": "George Orwell",
    "genero": "Distopía",
    "precio": 10.50,
    "resumen": "Ambientada en un futuro donde el 'Partido' y el 'Gran Hermano' ejercen un control totalitario sobre la vida de los ciudadanos, vigilando incluso sus pensamientos.",
    "imagen": "1984.jpg"
  },
  {
    "titulo": "Orgullo y prejuicio",
    "autor": "J.K. Rowling",
    "genero": "Romance Clásico",
    "precio": 8.75,
    "resumen": "Sigue la historia de Elizabeth Bennet y su relación con el orgulloso Sr. Darcy, explorando temas de moralidad, educación y matrimonio en la Inglaterra del siglo XIX.",
    "imagen": "orgullo_y_prejuicio.jpg"
  },
  {
    "titulo": "El Principito",
    "autor": "J.K. Rowling",
    "genero": "Ficción Infantil/Filosofía",
    "precio": 7.20,
    "resumen": "Un piloto varado en el desierto se encuentra con un pequeño príncipe de otro planeta que le enseña lecciones sobre la amistad, el amor y el sentido de la vida.",
    "imagen": "el_principito.jpg"
  },
  {
    "titulo": "Asesinato en el Orient Express",
    "autor": "Agatha Christie",
    "genero": "Misterio/Policíaca",
    "precio": 9.95,
    "resumen": "El detective Hércules Poirot debe resolver el asesinato de un hombre a bordo del lujoso tren Orient Express, atrapado por la nieve.",
    "imagen": "asesinato_orient_express.jpg"
  },
  {
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "genero": "Novela de Aventuras/Sátira",
    "precio": 18.00,
    "resumen": "Un hidalgo enloquece leyendo libros de caballerías y decide convertirse en un caballero andante para restaurar la justicia en el mundo, acompañado por su escudero Sancho Panza.",
    "imagen": "don_quijote.jpg"
  },
  {
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "Historia/No Ficción",
    "precio": 16.50,
    "resumen": "Un recorrido por la historia de la humanidad, desde la evolución de los primeros humanos hasta las revoluciones cognitivas, agrícolas y científicas que moldearon nuestro mundo.",
    "imagen": "sapiens.jpg"
  },
  {
    "titulo": "Harry Potter y la Piedra Filosofal",
    "autor": "J.K. Rowling",
    "genero": "Fantasía Juvenil",
    "precio": 12.80,
    "resumen": "Harry Potter descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería, donde hace amigos y se enfrenta al malvado Lord Voldemort.",
    "imagen": "harry_potter_piedra_filosofal.jpg"
  },
  {
    "titulo": "Crimen y castigo",
    "autor": "Fiódor Dostoievski",
    "genero": "Novela Psicológica",
    "precio": 11.25,
    "resumen": "El estudiante Raskólnikov planea y ejecuta el asesinato de una vieja prestamista en San Petersburgo y luego lidia con las consecuencias morales y psicológicas de su acto.",
    "imagen": "crimen_y_castigo.jpg"
  },
  {
    "titulo": "Rayuela",
    "autor": "Julio Cortázar",
    "genero": "Novela Experimental",
    "precio": 13.50,
    "resumen": "Una 'antinovela' que puede leerse de forma lineal o siguiendo un 'Tablero de Dirección'. Explora la vida bohemia de Horacio Oliveira en París y Buenos Aires.",
    "imagen": "rayuela.jpg"
  }
]

document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("listado_libros")) {
    fetch("assets/json/data.json")
      .then(response => response.json())
      .then(data => {
        drawBooks(data)

        const libros_serializado = JSON.stringify(data)
        sessionStorage.setItem("listado_libros", libros_serializado);
        console.log("Datos guardados");
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  } else {
    const libros_from_storage = JSON.parse(sessionStorage.getItem("listado_libros"))
    drawBooks(libros_from_storage)
    console.log("Datos existentes");
  }




})

//map, find, filter
// return explícito, implícito
const libros_under_10 = libros.filter((libro, index) => { return libro.precio <= 10 })
// console.log(libros_under_10);

const libros_find = libros.find((libro, index) => { return libro.titulo === "Don Quijote de la Mancha" })
// console.log("libros_find", libros_find);

const TRM = 3900

const libros_pesos = libros.map((libro, index) => { return { ...libro, precio: libro.precio * TRM } })
console.log(libros_pesos);

const drawBooks = (libros) => {
  contenedor.innerHTML = ""
  libros.forEach((libro, index) => {
    // console.log(libro);
    contenedor.innerHTML += `
                <article class="book-container card col-12 col-sm-6 col-lg-4 mb-3 mx-3 text-md-start">
                <img src="./assets/images/${libro.imagen ? libro.imagen : 'el_alquimista.jpg'}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${libro.titulo}</h5>
                    <p class="card-text">
                        ${libro.resumen}
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><span>Precio: </span>$${libro.precio}</li>
                    <li class="list-group-item"><span>Autor: </span>${libro.autor}</li>
                    <li class="list-group-item"><span>Género: </span>${libro.genero}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </article>
    `
  });
}




const btn_event = document.querySelector("#btn_event")
const btn_clean = document.querySelector("#btn_clean")

let number = 0
btn_event.addEventListener("click", () => {
  // const libros_from_storage = JSON.parse(sessionStorage.getItem("alkosto"))
  // libros_from_storage ? console.log("hay libros en el storage") : console.log("error");
  //verificar si los libros existen en el storage con try/catch
  try {
    const libros_from_storage = JSON.parse(sessionStorage.getItem("listado_libros"))
    drawBooks(libros_from_storage)
  } catch (error) {
    console.log(error);
    drawBooks(libros);
  }
})

btn_clean.addEventListener("click", () => {
  contenedor.innerHTML = `
    <h2 class="text-muted">No hay libros disponibles</h2>
  `
})

console.log(btn_event);


const formulario_buscar = document.querySelector("#formulario_buscar")

formulario_buscar.addEventListener('submit', (event) => {
  event.preventDefault();
  const buscarInput = formulario_buscar[0].value.toLowerCase();
  const libros_from_storage = JSON.parse(sessionStorage.getItem("listado_libros"))
  const libros_encontrados = libros_from_storage.filter((libro, index) => { return libro.autor.toLowerCase().includes(buscarInput) })
  console.log(libros_encontrados);
  drawBooks(libros_encontrados)


  //formulario_buscar[0].value = ""


  console.log(event);

})

// solo habilitar el botón de búsqueda si tiene 3 o más caracteres
const inputField = formulario_buscar[0]
inputField.addEventListener("keyup", (event) => {
  //if tradicional
  if (inputField.value.length >= 3) {
    formulario_buscar[1].disabled = false;
  } else {
    formulario_buscar[1].disabled = true;
  }
  //operador ternario
  //inputField.value.length >= 3 ?  formulario_buscar[1].disabled = false : formulario_buscar[1].disabled = true;
})

// almacenamiento local (localStorage, sessionStorage)
// const libros_serializado = JSON.stringify(libros)
// sessionStorage.setItem("listado_libros", libros_serializado);

// const libros_from_storage = JSON.parse(sessionStorage.getItem("listado_libros"))

// console.log("libros_serializado", libros_serializado);
// console.log("libros_from_storage", libros_from_storage);

// fetch
