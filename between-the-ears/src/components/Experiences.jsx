import React from 'react'
import Header from './Header'
import data from '../assets/resources'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Dropdown, Card, Image, CardContent } from 'semantic-ui-react'
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
      <Dropdown.Item text='All' icon='list layout'onClick={()=>dispatch(loadResources(data))}/>
      <Dropdown.Item text='plane' icon='plane' onClick={handleClick} />
      <Dropdown.Item text='disney' icon='font Awesome' onClick={handleClick}/>
      <Dropdown.Item text='change' icon='delete calendar'onClick={handleClick} />
      <Dropdown.Item text='noise' icon='volume up' onClick={handleClick} />
      <Dropdown.Item text='restaurant' icon='food' onClick={handleClick}/>
      <Dropdown.Item text='hotel' icon='hotel'onClick={handleClick}/>
      <Dropdown.Item text='waiting' icon='wait'onClick={handleClick}/>
    
      
      
    </Dropdown.Menu>
  </Dropdown>
</div>
</div>



    <Card.Group itemsPerRow={4}>
      {resources.map(resource=>{
        return (

         <Card>
          <CardContent>
               <iframe
              width="560"
              height="315"
              src= {`https://www.youtube.com/embed/${resource.link}?autoplay=0`} // Add ?autoplay=0 to the video URL
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              ></iframe>      
        </CardContent>
        <CardContent>
          <Card.Header>
            {resource.title}
          </Card.Header>
          <Card.Meta>
            <span><strong>Category:</strong> {resource.category}</span>
            <p><strong>{resource.type}</strong></p>
          </Card.Meta>

        </CardContent>
         </Card>

      )
    })}
    </Card.Group>

   
  
    

    
    
    </>
  )
}

export default Experiences