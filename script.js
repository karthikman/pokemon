const search_term = document.getElementById('search_q')
const search_btn = document.getElementById('search-btn')
const getPokemonData = async term => {
    try{
        document.getElementById('show_error').classList.remove('show')
        document.getElementById('show_error').classList.add('hidden')
    }
    catch(error){
         console.log(error)
    }        
    const url = `https://pokeapi.co/api/v2/pokemon/${term}`
   // const url = `https://pokeapi.co/api/v2/item/${term}`
   // const url2 = `https://pokeapi.co/api/v2/ability/${term}`
    const response = await fetch(url)
   // const response1 = await fetch(url1)
   // const response2 = await fetch(url2)
    if(response.status == 404 || response.statusText == 'Not Found'){
        document.getElementById('show_error').classList.add('show')
        document.getElementById('show_error').classList.remove('hidden')
        return
    }
    const pokemon = await response.json()
    //const pokemon1 = await response1.json()
   // const pokemon2 = await response2.json()
    debugger
    document.getElementById('update_img').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
    document.getElementById('update_name').innerHTML = pokemon.name
    document.getElementById('update_name').innerHTML = item.effect_entries
}
search_btn.addEventListener('click', () => getPokemonData(search_term.value))