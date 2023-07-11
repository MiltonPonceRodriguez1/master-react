// import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

// console.log(owners);

// TODO FIND regresa un unico elemento
const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
// console.log( getHeroeById(2) );

// TODO FILTER regresa todos los elementos que cumplan con la condición
export const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner );
// console.log( getHeroeByOwner('DC') );

export default getHeroeById;