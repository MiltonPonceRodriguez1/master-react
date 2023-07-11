import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById( id );

        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe retornar undefined si  no existe', () => {
        const id = 82;
        const heroe = getHeroeById( id );

        expect( heroe ).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar una longitud de 3 y que sean de DC', () => {
        const owner = 'DC';
        const heroesGet = getHeroesByOwner(owner);

        expect( heroesGet.length ).toBe( 3 );        
        expect( heroesGet ).toEqual( heroes.filter((heroe) => heroe.owner === owner) );

    });
    
    test('getheroesByOwner debe retornar una longitud de 2 del dueño Marvel', () => {
        const owner = "Marvel";
        const heroesTest = getHeroesByOwner('Marvel');

        expect( heroesTest.length ).toBe(2);
        expect( heroesTest ).toEqual( heroes.filter( (hero) => hero.owner === owner ) );
    });
});