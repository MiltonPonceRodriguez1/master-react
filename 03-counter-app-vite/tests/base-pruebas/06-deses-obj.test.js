import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => { 
    test('Debe regresar 1 string, 3 numbers', () => { 
        const { nombreClave, anios, latlng } = usContext({ clave: 'Spiderman', edad: 20});
        const { lat, lng } = latlng;

        expect( nombreClave ).toEqual( expect.any(String) );
        expect( anios ).toEqual( expect.any(Number) );
        expect( lat ).toEqual( expect.any(Number) );
        expect( lng ).toEqual( expect.any(Number) );
    });
});