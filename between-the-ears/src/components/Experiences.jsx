import React from 'react'
import Header from './Header'
import data from '../assets/resources'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Dropdown} from 'semantic-ui-react'
import { loadResources } from '../actions/experienceAction'
import { filterResources } from '../actions/experienceAction'


const Experiences = () => {
const dispatch = useDispatch()
const resources = useSelector(state=>state.resources.resources)
const [filter, setFilter] = useState("")


useEffect(() => {
   
  
dispatch(loadResources(data))
  
}, [])

useEffect(()=>{
   dispatch(loadResources(data)) 

   if(filter !== ""){
    dispatch(filterResources(filter))
   }
},[filter])


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
    
    <Dropdown text="Filter By Category">
      
    <Dropdown.Menu>
      <Dropdown.Item text='All' icon='angle double down'onClick={()=>dispatch(loadResources(data))}/>
      <Dropdown.Item text='plane' icon='eye slash outline' onClick={handleClick} />
      <Dropdown.Item text='disney' icon='volume up' onClick={handleClick}/>
      <Dropdown.Item text='change' icon='frown outline'onClick={handleClick} />
      <Dropdown.Item text='noise' icon='sync alternate' onClick={handleClick} />
      <Dropdown.Item text='restaurant' icon='tint' onClick={handleClick}/>
      <Dropdown.Item text='hotel' icon='clock outline'onClick={handleClick}/>
      <Dropdown.Item text='waiting' icon='heartbeat'onClick={handleClick}/>
    
      
      
    </Dropdown.Menu>
  </Dropdown>
</div>
</div>



    <ul>

    {resources.map(resource=>{
      return (<li>{resource.title}</li>
      )
    })}
    </ul>
    

    
    
    </>
  )
}

export default Experiences