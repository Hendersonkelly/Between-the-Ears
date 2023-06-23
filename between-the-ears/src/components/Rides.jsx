import React, {useEffect, useState} from 'react'
import data from '../assets/rides'
import {useDispatch, useSelector} from 'react-redux'
import { filterRides, loadRides } from '../actions/rideActions'
import Top from './Header'
import "../css/rides.css"
import Footer from './Footer'
import { Dropdown, Card, Image, CardContent, Container, Header, Segment} from 'semantic-ui-react'


const Rides = () => {
  
  const dispatch = useDispatch()
  const rides = useSelector(state=>state.rides.rides)

const [filter, setFilter] = useState("")


  useEffect(() => {
    
    dispatch(loadRides(data))
    
  }, [])

  useEffect(() => {
    dispatch(loadRides(data))
    if (filter !== '') {
      dispatch(filterRides(filter));
    }
  }, [filter]);
 

const handleClick = (e) => {
  
setFilter(e.currentTarget.textContent)


  

}
  
  return (
    <>
    <Top/>
    <div style={{backgroundColor:"#abcd84", opacity:".8", marginTop:"5em"}}>
    <Header textAlign='center' as="h1">Prepare for the Rides </Header>
  <Container   >

      Rides while fun for those who love a sense of surprise and anticipation, is not always a trait that everyone has. Disney has categorized its rides by differrent types so you know what rides can be a yes, a maybe, and a not yet. You can filter through the rides by category. Also as a part of each card you will see a link to a video. For our anticipation worriers, this link will allow someone to watch a first person point of view to support decision making as well as limiting surprises. 

    
    
  </Container>
  </div>
    <div style={{
            display: 'block', width: 300, paddingBottom: 20, backgroundColor:"#abcd84", opacity:".8", marginTop:"9em", marginBottom:"1em", textAlign:"center" ,boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }}>
    <br/>
    
    <Dropdown  upward text="Filter By Type">
      
    <Dropdown.Menu >
      <Dropdown.Item className='drop' text='All' icon=''onClick={()=>dispatch(loadRides(data))}/>
      <Dropdown.Item className='drop' text='dark' icon='eye slash outline' onClick={handleClick} />
      <Dropdown.Item  className='drop'text='loud' icon='volume up' onClick={handleClick}/>
      <Dropdown.Item className='drop' text='scary' icon='frown outline'onClick={handleClick} />
      <Dropdown.Item className='drop' text='spinning' icon='sync alternate' onClick={handleClick} />
      <Dropdown.Item className='drop' text='water' icon='tint' onClick={handleClick}/>
      <Dropdown.Item className='drop' text='slow' icon='clock outline'onClick={handleClick}/>
      <Dropdown.Item className='drop' text='thrill' icon='heartbeat'onClick={handleClick}/>
      <Dropdown.Item className='drop' text='small drops' icon='angle down'onClick={handleClick}/>
      <Dropdown.Item className='drop' text='Big drops' icon='angle double down'onClick={handleClick}/>
      
      
    </Dropdown.Menu>
  </Dropdown>
</div>




<Card.Group itemsPerRow={5}>

    {rides.map(ride=>{
      return (
    <div className= "z1"style={{margin:".6em", width:"20em"}}>
        <Card>
        <Image src={ride.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{ride.name}</Card.Header>
        <Card.Meta>
          <strong>Park:</strong> {ride.park}
          <p><strong>Height: </strong> {ride.height}</p>
        </Card.Meta>
          </Card.Content>
          <CardContent>
          <Card.Description>
          <strong>Summary:</strong> {ride.summary}
          </Card.Description>
            <div>
            <strong>Movie:</strong> {ride.movie}
            </div>
          <div>
          <strong>Category:  </strong>
          {ride.description.map(description=>{
            return "\n \n" + description + ",\n \n"
          })}
          </div>
          
       
          <strong>POV video:</strong> 
          <a href={ride.video}> Follow Link</a> 
        </CardContent>
      </Card>
     </div>
      )
    })}
    
    </Card.Group>
    
    
    </>
  )
}

export default Rides