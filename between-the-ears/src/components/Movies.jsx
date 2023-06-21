import React, {useState} from 'react'
import { useEffect } from 'react'
import MovieItem from './MovieItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { searchCharacter } from '../actions/movieActions'
import OpenAI from './OpenAI'
import { Grid, GridRow, Image, Button} from 'semantic-ui-react'



const Movies = () => {

const dispatch = useDispatch()
const [character, setCharacter] = useState("")
const characters = useSelector(state=> state.characters.characters)
const cart = useSelector(state=> state.cart.cartItems)
const [prompt, setPrompt] = useState("")
const [movie, setMovie] = useState("")
const [moviePrompt, setMoviePrompt] = useState("")



useEffect(() => {
console.log(characters.films, "fillms");
  let film = ""
  if (Object.keys(characters).length > 0){
    if(characters.films.length && characters.films.length >0){
      film = characters.films[0]
    }
    else{
      film = characters.films
    }
    setPrompt(film)

  }

  
}, [characters])

const handleSubmit = async (e) => {
  e.preventDefault()
  
  let results = await fetch(`https://api.disneyapi.dev/character?name=${character}`)
  let data = await  results.json()
  console.log(data, "inside fetch");
  dispatch(searchCharacter(data.data))
  
  
}

const handleSearch = async (e) => {
  e.preventDefault()

  let results =  await fetch(`http://www.omdbapi.com/?t=${moviePrompt}&apikey=be14cd78`)
  let data = await results.json()
  console.log(data, "inside movie api");
setMovie(data.Title)
}



  return (
    







 <>
<Grid>
    <Grid.Row>
      <Grid.Column width={8}>
      <div>Search By Character</div>
    <br/>
    <form onSubmit={handleSubmit}>
      <div class="ui action input">
      <input type="text" value={character} placeholder='character name'  fdprocessedid="xynnjj"onChange={(e)=>setCharacter(e.target.value)}/>

      <button class="ui button" fdprocessedid="uyeeml">Search</button>
    </div>
    
    </form>
    <ul>
      
       
         
      <li>{characters.name}</li>
        
       
        
     
      {<OpenAI prompt={moviePrompt}/> }
    </ul>
    
      </Grid.Column>
      <Grid.Column width={8}>
      <div>Search By Movie</div>
    <br/>
    <form onSubmit={handleSearch}>
    <div class="ui action input">
    <input type="text" value={moviePrompt} placeholder='movie name'  fdprocessedid="xynnjj" onChange={(e)=>setMoviePrompt(e.target.value)}/>

  <button class="ui button" fdprocessedid="uyeeml">Search</button>
</div>
    
    </form>

    <ul>
       
          <li>{movie}</li>
        
      {<OpenAI prompt={moviePrompt}/> }
      
    </ul>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={12}>
        {/* {console.log(cart, "map")}
      <div>
        {cart.map(item=>{
          return <div>
            {item}
            </div>

        })}
      </div> */}
      </Grid.Column>
      
    </Grid.Row>
  </Grid>

  </>
  )

}
export default Movies