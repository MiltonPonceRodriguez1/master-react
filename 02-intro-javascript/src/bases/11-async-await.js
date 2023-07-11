// const getImagenPromesa = () => new Promise( resolve => resolve('https://imagen.com'));
// getImagenPromesa().then( console.log );

export const getImagen = async () => {

    try {
        const apiKey = "5POT7YyGKYivnGasUL3oMjJ9MLAFcjOo";
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();

        const { url } = data.images.original;

        return url;
    } catch (error) {
        console.error(error);
        return 'No se encontro la imagen';
    }
}

getImagen();
