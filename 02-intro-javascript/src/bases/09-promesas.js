import getHeroeById from './bases/08-imp-exp'

// ? Promesas

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
        
//         resolve( heroe );
//         // reject( "No se pudo encontrar el Heroe" );

//     }, 2000);
// });

// promesa.then( console.log )
//     .catch( console.warn );

const getHeroeByIdAsync = ( id ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            
            if (heroe === undefined) reject( "No se pudo encontrar el Heroe" );

            resolve( heroe );
            // reject( "No se pudo encontrar el Heroe" );
        }, 2000);
    });
}

getHeroeByIdAsync(5)
    .then( console.log )
    .catch( console.warn );