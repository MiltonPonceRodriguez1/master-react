// ? Desestructuración de Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => (['ABC', 123]);

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

// ! TAREA

const usState = ( valor ) => {
    return [ valor, () => { console.log("Hola Mundo"); } ];
}

const [ nombre, setNombre ] =  usState( 'Gohan' );

console.log( nombre );
setNombre();