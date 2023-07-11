const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 524684,
        lat: 48.256,
        lng: 34.156,
    },
}

const persona2 = { ...persona };
persona2.nombre = "Peter";
// console.table( persona );
console.log( persona );
console.log( persona2 );