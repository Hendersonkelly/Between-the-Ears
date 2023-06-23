import React from 'react'
import {Link} from 'react-router-dom'

import "semantic-ui-css/semantic.min.css";
import "../src/css/app.css"
// import "../src/css/pages.css"
import { Button, Grid, Container, Header,Item, Menu, Segment, Image, Divider, Card, ItemDescription, MenuHeader, GridColumn, CardDescription, Icon, Sticky } from "semantic-ui-react";
import Footer from './components/Footer';

const App = () => {
  return (
    <>
        
          <Menu>
            <Menu.Item active><Link className='link page' to="/">Home</Link></Menu.Item>
            <Menu.Item><Link  className='link page' to="/movies">Movie Night</Link></Menu.Item>
            <Menu.Item><Link className='link page' to="/rides">Rides</Link></Menu.Item>
            <Menu.Item><Link className='link page' to="/experiences">Social Skills</Link></Menu.Item>
            <Menu.Item  position='right'><Link className='link name' to="/">Between the Ears</Link></Menu.Item>
           
         </Menu>


         <Grid>
          <GridColumn width={8}>
          <Container className="picture"style={{fontSize:"1.5em"}}>
       
          
        </Container>
          </GridColumn>

          <GridColumn width={8}>
            <Container className='together'>
           
              <Card >
              <Card.Content>
                <Card.Header>Between the Ears  </Card.Header>
                <Card.Description><strong>  Disney prep for the nuerodiverse</strong></Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description>
                Between the Ears is a resource guide supporting preparations for a Disney experience. You can find support for building knowledge about the characters that you could meet, information about the rides including a point of view video to support anticipation concerns, and social skills for changes to schedules, waiting in lines, and going on a plane. Disney can only be the happiest place on Earth when everyone has the access to experience it well. Enjoy!

                </Card.Description>
              </Card.Content>
              <Card.Content>
              <Card.Description>“To all who come to this happy place: Welcome. Disneyland is your land...."-Walt Disney</Card.Description>
              </Card.Content>
              <Card.Content>
              <Button href="/movies" size="large">Movie Night</Button>
              <Button href="/rides" size="large">Ride Prep</Button>
              <Button href="/experiences"size="large">Social Skills</Button>
              </Card.Content>
              </Card>
              </Container>
          </GridColumn>
            
          <Grid.Row>
          
         
          </Grid.Row>
         </Grid>
   
          <Segment style={{position:"fixed", bottom:"0", width:"100%"}}>

     <Footer />
          </Segment>
          
    
       
        
         



    
    

    </>
  )
}

export default App
