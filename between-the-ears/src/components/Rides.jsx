import React, {useEffect, useState} from 'react'
import data from '../assets/rides'
import {useDispatch, useSelector} from 'react-redux'
import { filterRides, loadRides } from '../actions/rideActions'
import Header from './Header'

import { Dropdown, Input } from 'semantic-ui-react'


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



    <ul>

    {rides.map(ride=>{
      return (<li>{ride.name}</li>
      )
    })}
    </ul>
    </>
  )
}

export default Rides