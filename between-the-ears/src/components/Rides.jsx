import React, {useEffect, useState} from 'react'
import data from '../assets/rides'
import {useDispatch, useSelector} from 'react-redux'
import { filterRides, loadRides } from '../actions/rideActions'
import Header from './Header'

import { Dropdown, Card, Image, CardContent} from 'semantic-ui-react'


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
    <Header/>
    <div>
    <div style={{
            display: 'block', width: 700, padding: 30
    }}>
    <br/>
    
    <Dropdown text="Filter By Type">
      
    <Dropdown.Menu>
      <Dropdown.Item text='All' icon=''onClick={()=>dispatch(loadRides(data))}/>
      <Dropdown.Item text='dark' icon='eye slash outline' onClick={handleClick} />
      <Dropdown.Item text='loud' icon='volume up' onClick={handleClick}/>
      <Dropdown.Item text='scary' icon='frown outline'onClick={handleClick} />
      <Dropdown.Item text='spinning' icon='sync alternate' onClick={handleClick} />
      <Dropdown.Item text='water' icon='tint' onClick={handleClick}/>
      <Dropdown.Item text='slow' icon='clock outline'onClick={handleClick}/>
      <Dropdown.Item text='thrill' icon='heartbeat'onClick={handleClick}/>
      <Dropdown.Item text='small drops' icon='angle down'onClick={handleClick}/>
      <Dropdown.Item text='Big drops' icon='angle double down'onClick={handleClick}/>
      
      
    </Dropdown.Menu>
  </Dropdown>
</div>
</div>



<Card.Group itemsPerRow={6}>

    {rides.map(ride=>{
      return (
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
      )
    })}
    
    </Card.Group>
    </>
  )
}

export default Rides