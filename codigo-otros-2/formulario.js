// El codigo toma los datos del formulario y los imprime en el DOM

// Creo recordar que "var" no debe usarse y se hace un selector de form
const formulario = document.forms["form"]

//cambio a evento submit 
formulario.addEventListener(`submit`, (event)=>{

  //se ajusta preventDefautl
  event.preventDefault();
  
  // hay que darle un nombre adecuado a las variables yse adignan con el id del campo
  let name = formulario.elements[`name`];
  let age = formulario.elements[`age`]
  let nation = formulario.elements[`nationality`]

   let nombre = name.value
   let edad = age.value

  let i = nation.selectedIndex;
  let nacionalidad = nation.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    name.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    age.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
})

// creaba un segundo boton que no funcionaba

/* const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar" */ 
//const corteLinea = document.createElement("br")
//document.body.appendChild(corteLinea)
/* document.body.appendChild(botonBorrar); */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados")

const elementoLista = document.createElement("div")
elementoLista.classList.added; //Se elimina el parentesis que generaba error
lista.appendChild(elementoLista)

// es lo mismo que la funcion pero fuera de lla no se para que estaba

/* const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio) */

function crearElemento(descripcion, valor) {
const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

//crearElemento("Nombre", "said"); // duplicaba el nombre
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}