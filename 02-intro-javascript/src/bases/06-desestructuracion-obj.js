// ? Desestructuración
// ? Asignación Desestructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
};

const { nombre, clave, edad } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );

const usContext = ( {clave, nombre, edad, rango = "Capitán"} ) => {
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.25646,
            lng: -12.3254,
        },
    };
};

const { nombreClave, anios, latlng: {lat, lng} } = usContext(persona);

console.log( nombreClave, anios );
console.log( lat, lng );