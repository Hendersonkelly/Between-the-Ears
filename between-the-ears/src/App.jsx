import React from 'react'
import {Link} from 'react-router-dom'

import "semantic-ui-css/semantic.min.css";
import "../src/css/app.css"
// import "../src/css/pages.css"
import { Button, Container, Header,Item, Menu, Segment, Image, Divider, Card, ItemDescription } from "semantic-ui-react";

const App = () => {
  return (
    <>
      <Segment.Group  stacked>
        <Segment>
          <Menu>
            <Menu.Item active><Link className='link' to="/">Home</Link></Menu.Item>
            <Menu.Item><Link  className='link' to="/knowledge">Movie Night</Link></Menu.Item>
            <Menu.Item><Link className='link' to="/rides">Rides</Link></Menu.Item>
            <Menu.Item><Link className='link' to="/experiences">Social Skills</Link></Menu.Item>
         </Menu>
         
        </Segment>
        <Segment >
        <Container fluid  >
          <Card>

          <Header  >
            Between the Ears
          </Header>
          <ItemDescription>
              Disney Prep with the Nuerodiverse In Mind
          </ItemDescription>
          </Card>
        

        
        </Container>
        
         
        </Segment>
        <Segment >
        <p style={{fontSize:"1.5em"}}>
      Between the Ears is a resource guide supporting preparations for a Disney experience. You can find support for building knowledge about the characters that you could meet, information about the rides including a pointy of view video to support anticipation concerns as well as social preparation resources for changes to schedules, waiting in lines, and going on a plane. Disney can only be the happiest place on Earth when everyone has the access to experience it well. Enjoy!
    </p>
    <div className='buttons'>
      
    <Button href="/knowledge" size="huge">Knowledge</Button>
    <Button href="/experiences"size="huge">Experiences</Button>
    </div>
        </Segment>
        <Segment>
          footer
        </Segment>



      </Segment.Group>
    

    </>
  )
}

export default App
