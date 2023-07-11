// ? Funciones en JS

// const saludar = function (nombre) {
//     return `Hola, ${nombre}`;
// }

const saludar = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => `Hola, ${nombre}`;


console.log( saludar("Goku") );
console.log( saludar2("Vegeta") );

const getUser = () => ({
    uid: 'ABC123',
    username: "El_papi1502",
})


const user =  getUser();
console.log( user );

// ! TAREA
// ! Transformar a una función flecha
// ! Tiene que retornar un objeto implicito
// ! Pruebas

function getUsuarioActivo( nombre ) {
    return {
        uid: "ABC567",
        username: nombre,
    }
}

const usuarioActivo = getUsuarioActivo("Milton");
console.log( usuarioActivo );

// TODO SOLUCIÓN TAREA

const getUsuarioActivo2 = ( nombre ) => ({
    uid: "ABC567",
    username: nombre,
});


const usuarioActivo2 = getUsuarioActivo2("Dokken");
console.log( usuarioActivo2 );