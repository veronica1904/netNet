const popularContent = document.getElementById("popularContent")
const animeContent = document.getElementById("animeContent")
const crimesContent = document.getElementById("crimesContent")
const exampleModal = document.getElementById("exampleModal")
const detailContent = document.getElementById("detailContent")
var popular = document.createDocumentFragment();
var animes = document.createDocumentFragment();
var crimes = document.createDocumentFragment();


const data = [
    {
        "name": "Bob Esponja",
        "genre": "populares_netnet",
        "desc": "Bob Esponja vive feliz en su piña en Fondo de Biquini, junto a su mascota, el caracol Gary. Le encanta su trabajo en el Crustáceo Crujiente, y siempre tiene tiempo para quedar con su mejor amigo, Patricio. Pero un día, todo cambia cuando, al llegar a casa, descubre que Gary ha sido secuestrado... "
    },
    {
        "name": "spiderman",
        "genre": "populares_netnet",
        "desc": "La película se centra en el genio adolescente marginado Peter Parker, quien desarrolla habilidades sobrehumanas parecidas a las de una araña después de ser mordido por una araña genéticamente alterada."
    },
    {
        "name": "Matrix",
        "genre": "populares_netnet",
        "desc": "Matrix narra la aventura de Neo, un joven hacker que es convocado por el movimiento de resistencia liderado por Morfeo, que lucha contra la dominación de los seres humanos por las máquinas. Morfeo le ofrece dos pastillas de diferentes colores: con una continuará en la ilusión, con la otra descubrirá la verdad... "
    },
    {
        "name": "Change Equation",
        "genre": "series_eeuu",
        "desc": "Un documental que analiza cómo la innovación empresarial puede permitir a los empleados y clientes realizar un cambio social positivo. Ubicado en Londres y Kenia, el documental primero ofrece una breve descripción de la condición social del mundo con respecto a la pobreza, la desigualdad y los desafíos relacionados."
    },
    {
        "name": "Arrow",
        "genre": "series_eeuu",
        "desc": "Arrow (en Hispanoamérica: Flecha) es una serie de televisión de un vigilante estadounidense desarrollada por los escritores/productores Greg Berlanti, Marc Guggenheim y Andrew Kreisberg. Está basado en el personaje de DC Comics Green Arrow, un luchador contra el crimen disfrazado creado por Mort Weisinger y George Papp. Se estrenó el 10 de octubre de 2012 en Estados Unidos en el canal de televisión The CW, con transmisión internacional a finales de 2012.  "

    },
    {
        "name": "El Chapo",
        "genre": "series_eeuu",
        "desc": "Joaquín Archivaldo Guzmán Loera (La Tuna, Sinaloa; 4 de abril de 1957​), más conocido por su apodo El Chapo Guzmán,​ es un narcotraficante mexicano que se desempeñó como líder del Cártel de Sinaloa hasta su extradición a Estados Unidos en 2017"
    },
    {
        "name": "Caballero Del Zodiaco",
        "genre": "series_japonesa",
        "desc": "Seiya, Hyoga, Shiryu, Shun e Ikki son un grupo de jóvenes caballeros (santos) que luchan del lado de la reencarnación de la diosa Atenea (Saori Kido). ... Para salvar a Atenea tendrán que cruzar las 12 casas del zodíaco y descubrir la verdadera identidad del malvado patriarca."
    },
    {
        "name": "Naruto",
        "genre": "series_japonesa",
        "desc": "Naruto es un manga japonés cuya popularidad ha crecido mucho desde su primera publicación en un Capítulo Piloto en 1997 y posterior su serialización (Historia en capítulos) en 1999 publicada por la revista Shonen Jump, luego de posicionarse entre los mejores mangas vendidos en Japón, el manga fue adaptado en un anime por la productora de anime Studio Pierrot y transmitida en Japón por Tokyo TV Tokyo."
    },
    {
        "name": "Pokemon",
        "genre": "series_japonesa",
        "desc": "Pokémon: Detective Pikachu (también conocida como Detective Pikachu) es una película de fantasía estadounidense de 20194​ dirigida por Rob Letterman y escrita por Nicole Perlman y Letterman, basada en el videojuego del mismo nombre."
    },

]

const showDetails = (element, index) => {
    exampleModal.style.display = "block"
    const { name, genre, desc } = element
    detailContent.querySelector("h1").textContent = name
    if (genre === "populares_netnet") {
        detailContent.querySelector("img").src = `./image/pelicula/populares_netnet/${name}.png`
    }
    if (genre === "series_eeuu") {
        detailContent.querySelector("img").src = `./image/pelicula/series_eeuu/${name}.png`
    }
    if (genre === "series_japonesa") {
        detailContent.querySelector("img").src = `./image/pelicula/series_japonesa/${name}.png`
    }

    detailContent.querySelector("p").textContent = desc
}

const closeModal = () => {
    exampleModal.style.display = "none"
}

window.addEventListener('DOMContentLoaded', async () => {
    data.filter(item => item.genre === "populares_netnet").forEach((element, index) => {
        var cover = document.createElement("a")
        var image = document.createElement("img")
        image.setAttribute("src", `./image/pelicula/populares_netnet/${element.name}.png`)
        cover.appendChild(image)
        cover.onclick = () => showDetails(element, index)
        popular.appendChild(cover)
    })
    data.filter(item => item.genre === "series_japonesa").forEach((element, index) => {
        var cover = document.createElement("a")
        var image = document.createElement("img")
        image.setAttribute("src", `./image/pelicula/series_japonesa/${element.name}.png`)
        cover.appendChild(image)
        cover.onclick = () => showDetails(element)
        animes.appendChild(cover)
    })
    data.filter(item => item.genre === "series_eeuu").forEach((element, index) => {
        var cover = document.createElement("a")
        var image = document.createElement("img")
        image.setAttribute("src", `./image/pelicula/series_eeuu/${element.name}.png`)
        cover.appendChild(image)
        cover.onclick = () => showDetails(element)
        crimes.appendChild(cover)
    })

    popularContent.appendChild(popular)
    animeContent.appendChild(animes)
    crimesContent.appendChild(crimes)
});
