import React, {useState} from 'react'
import { useEffect } from 'react'
import MovieItem from './MovieItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { searchCharacter } from '../actions/movieActions'
import OpenAI from './OpenAI'
const Movies = () => {

const dispatch = useDispatch()
const [character, setCharacter] = useState("")
const characters = useSelector(state=> state.characters.characters)
const [prompt, setPrompt] = useState("")

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

  return (
    <>
    <form onSubmit={handleSubmit}>

      <input type="text" value={character} placeholder='character name' onChange={(e)=>setCharacter(e.target.value)}/>
      <button>Submit</button>
    </form>

    <ul>
      
       
         
          <li>{characters.name}</li>
        
       
        
     
      {<OpenAI prompt={prompt}/> }
    </ul>

    
    </>
  )

}
export default Movies


