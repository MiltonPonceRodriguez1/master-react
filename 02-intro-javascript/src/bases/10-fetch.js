const apiKey = "5POT7YyGKYivnGasUL3oMjJ9MLAFcjOo";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( response => response.json() )
    .then( ({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
        
        console.log(data.images.original.url);
        console.log(url);
    })
    .catch( console.warn );