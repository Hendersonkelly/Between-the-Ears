
import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Icon, Image, Card} from 'semantic-ui-react'
const MovieItem = (movie) => {
const characters = useSelector(state=>state.characters.characters)

  return (
    <>
     {characters.map(characterobj=>{
      return (
        <Card>
    <Image src={characterobj.imageUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{characterobj.name}</Card.Header>
    
      <Card.Description>
       {movie}
      </Card.Description>
    </Card.Content>
    {/* <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */}
  </Card>
      )
    }) }
    
    
 
    
    </>


  )
}

export default MovieItem