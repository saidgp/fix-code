/*El codigo esta tomando una api fetch para obtener el nombre, direccion de blog y ubicacion
     de un usuario especifico, el cual fu determinado en la funcion */

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const names = document.getElementsByClassName('name'); /* las variables no tenian nombres faciles de entender */
const blog = document.querySelector('#blog');
const place= document.querySelector('.location');
names.innerHTML = 'cargando...'; // intentaba hacer un inner para ver si lo tomaba, no lo hizo
console.log("primera variable  " +usersEndpoint)

/* Cambio el metodo de la api fetch para vis ualizar mejor*/

 const displayUser = async (username) => {
  try { 
  
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  console.log("respose " +response)
  names.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  place.textContent = '${data.location}';
}

catch (err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}
}

displayUser('stolinski');

/* const getProducstAsync = async ( url ) =>{
  try {
      const response = await fetch(url);
      const productsObj = await response.json();
      console.log(productsObj)
      productsObj.map( (product) => { console.log( product.title )})
  } catch (error) {
      console.log(error)
  }
}; */