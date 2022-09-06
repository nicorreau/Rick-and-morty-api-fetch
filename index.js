async function obtener_personajes (url_api){
    //Realizar peticion de tipo get
    const resp = await fetch(url_api,{
        method: 'GET' //'POST','DELETE','PUT'
    })
    
    //Obtener los datos de la peticion
    const data = await resp.json()
    return data.results
}


function mostrar_personajes (personajes){
    let cards = '';
    for (let i= 0; i < personajes.length; i++) {    
        cards += `
        <article class ="card">
            <img src="${personajes[i].image}">
            <div class="body-card">
                <h3>${personajes[i].name}</h3>
                    <span>${personajes[i].status}</span>
                    <span>${personajes[i].species}</span>
                    <span>${personajes[i].gender}</span>
                    <span>${personajes[i].origin.name}</span>
                
            </div>
        </article>
    `
    }
    //Adicionar tarjetas al section
    document.getElementById("section-cards").innerHTML = cards
}

async function main () {
    const url = 'https://rickandmortyapi.com/api/character'
    const personajes = await obtener_personajes(url)
    mostrar_personajes(personajes)

}

main() 