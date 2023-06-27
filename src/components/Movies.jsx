import React, {useState} from 'react'
import { useEffect } from 'react'
import "../css/movies.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { searchCharacter } from '../actions/movieActions'
import OpenAI from './OpenAI'
import { Grid, Icon, Image, Card, Container, Segment, Header, Sticky} from 'semantic-ui-react'
import { addCharacters } from '../actions/movieActions'
import Top from './Header'
import Footer from './Footer'
require('dotenv').config()
const Movies = () => {
let movieKey= process.env.REACT_APP_OMDB_API_KEY
const dispatch = useDispatch()
const [errorMessage, setErrorMessage] = useState("")
const characters = useSelector(state=> state.characters.characters)
const [moviePrompt, setMoviePrompt] = useState("")





const handleSearch = async (e) => {
  e.preventDefault()

  let results =  await fetch(`https://www.omdbapi.com/?t=${moviePrompt}&apikey=${movieKey}`)
  let data = await results.json()
  console.log(data, "inside movie api");
  dispatch(addCharacters(data))
  if(data.error === "Movie not found!"){
    setErrorMessage("Whoops something went wrong. Make sure you spelled your movie correctly and try again")
  }
  

  
}



  return (
    

 <>
 <Top/>
 
 <div style={{backgroundColor:"#f4efee", opacity:".8"}}>
    <Header textAlign='center' as="h1">Plan a Movie Night </Header>
  <Container   >

      A great way to support a good experience is by making the family familiar with some of the characters and story references. The more familiar we are with our surroundings the less overwhelming it can be. Type in a movie to get recipe suggestions and plan together what decorations might make sense. This is also a great times to have conversations about the characters dressed up in a mascot like costume as they can be scary for some. 

    
    
  </Container>
  </div>
<Grid  stackable> 
    <Grid.Row>
   

<form style={{marginTop:"2em"}} onSubmit={handleSearch}>
<div class="ui action input">
<input type="text" value={moviePrompt} placeholder='movie name'   onChange={(e)=>setMoviePrompt(e.target.value)}/>

<button class="ui button" size="huge" >Search</button>
</div>

</form>


<br /> 

    </Grid.Row>

    <Grid.Column   width={5} >
        
        <Card  >
          <Card.Content>
            
            <img style={{height:"13em"}} src={characters.Poster} alt=""/>

          </Card.Content>
          <Card.Content>
            <Card.Header>{characters.Title}
            </Card.Header>
            <Card.Meta>
                <span className='date'>{characters.Released}</span>
            </Card.Meta>
            <Card.Description>{characters.Plot}
            </Card.Description>
           </Card.Content>
        </Card>
       
      </Grid.Column>   


      <Grid.Column width={8}>
     
      <Grid.Row>


        
        
   <Container fluid>

      <OpenAI prompt={moviePrompt}/> 
   </Container>
     
      </Grid.Row>
    </Grid.Column>
     
 </Grid>

 <Segment className='footer' style={{position:"fixed", bottom:"0", width:"100%", }}>
        
        

        <Footer/>
       
      
     
          </Segment>

    
          

 
 
   

  
  




  </>
  )

}
export default Movies