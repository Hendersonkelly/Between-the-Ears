import React from 'react'
import Top from './Header'
import data from '../assets/resources'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Dropdown, Card, Image, CardContent, Header, Container, Segment } from 'semantic-ui-react'
import { loadResources } from '../actions/experienceAction'
import { filterResources } from '../actions/experienceAction'
import Footer from './Footer'
import "../css/experiences.css"
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
    <Top/>
    <div style={{backgroundColor:"#abcd84", opacity:".8", marginTop:"5em"}}>
    <Header textAlign='center' as="h1">Prepare for Different </Header>
  <Container   >

      Vacation for many are a chance to get out of your mundane routine and experience a new adventure. We know that for so many that idea can fell  unpredicatable, overwhelming, and even scary. This page provides a compilation of social stories, songs, and read-aloud books that can aid that process. The more exposure to a concept or idea someone has, reduces the chance they will find the concept so new or different that they experience an overwhelming response. It also allows us to use vocabulary and practice skills while someone feels comfortable and safe instead of waiting until it is harder to manage emotions and actions. You can filter by category like waiting because you can bet waiting will be hard in the excitement. I mean who wants to wait! you are at Disney!

    
    
  </Container>
  </div>
    <div>
    <div style={{
            display: 'block', width: 300, paddingBottom: 20, backgroundColor:"#abcd84", opacity:".8", marginTop:"9em", marginBottom:"1em", textAlign:"center" ,boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", opacity:".8"
    }}>
    <br/>
    
    <Dropdown upward text="Filter By Category">
      
    <Dropdown.Menu>
      <Dropdown.Item className='drop' text='All' icon='list layout'onClick={()=>dispatch(loadResources(data))}/>
      <Dropdown.Item className='drop' text='plane' icon='plane' onClick={handleClick} />
      <Dropdown.Item className='drop' text='disney' icon='font Awesome' onClick={handleClick}/>
      <Dropdown.Item className='drop' text='change' icon='delete calendar'onClick={handleClick} />
      <Dropdown.Item className='drop' text='noise' icon='volume up' onClick={handleClick} />
      <Dropdown.Item className='drop' text='restaurant' icon='food' onClick={handleClick}/>
      <Dropdown.Item className='drop' text='hotel' icon='hotel'onClick={handleClick}/>
      <Dropdown.Item className='drop' text='waiting' icon='wait'onClick={handleClick}/>
    
      
      
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
              width="350"
              height="300"
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