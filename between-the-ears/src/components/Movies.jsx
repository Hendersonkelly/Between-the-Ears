import React, {useState} from 'react'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { searchCharacter } from '../actions/movieActions'
import OpenAI from './OpenAI'
import { Grid, Icon, Image, Card, GridColumn} from 'semantic-ui-react'
import { addCharacters } from '../actions/movieActions'
import Header from './Header'

const Movies = () => {

const dispatch = useDispatch()
const [character, setCharacter] = useState("")
const characters = useSelector(state=> state.characters.characters)
const [moviePrompt, setMoviePrompt] = useState("")





const handleSearch = async (e) => {
  e.preventDefault()

  let results =  await fetch(`http://www.omdbapi.com/?t=${moviePrompt}&apikey=be14cd78`)
  let data = await results.json()
  console.log(data, "inside movie api");
dispatch(addCharacters(data))
}



  return (
    

 <>
 <Header/>
 <Grid>
  <Grid.Row>
  <div>Search By Movie</div>
    <br/>
    <form onSubmit={handleSearch}>
    <div class="ui action input">
    <input type="text" value={moviePrompt} placeholder='movie name'  fdprocessedid="xynnjj" onChange={(e)=>setMoviePrompt(e.target.value)}/>

  <button class="ui button" fdprocessedid="uyeeml">Search</button>
</div>
    
    </form>
  
    
      <br/>
  </Grid.Row>
  <Grid.Row>
    <Grid.Column width={8} >

 
    <Card >
        <Image src={characters.Poster} wrapped ui={false} />
         <Card.Content>
          <Card.Header>
            {characters.Title}
          </Card.Header>
           <Card.Meta>
             <span className='date'>{characters.Released}</span>
           </Card.Meta>
            <Card.Description>
              {characters.Plot}
            </Card.Description>
          </Card.Content>
    
         </Card>
    </Grid.Column>   
    <Grid.Column>
      <OpenAI prompt={moviePrompt}/> 
    </Grid.Column>
      
      
    

      
  </Grid.Row>
 </Grid>
  </>
  )

}
export default Movies