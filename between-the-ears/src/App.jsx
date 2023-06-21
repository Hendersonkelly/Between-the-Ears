import React from 'react'
import {Link} from 'react-router-dom'

import "semantic-ui-css/semantic.min.css";
import "../src/css/homepage.css"
import { Button, Container, Header, Menu, Segment } from "semantic-ui-react";

const App = () => {
  return (
    <>
    <div className="App">
<Segment inverted vertical textAlign="center">
  <Container as="nav">
    <Header inverted as="h1">
     Between the Ears
    </Header>
    <Menu borderless compact inverted>
      <Menu.Item active><Link to="/">Home</Link></Menu.Item>
      <Menu.Item><Link to="/knowledge">Movie Night</Link></Menu.Item>
      <Menu.Item><Link to="/rides">Ride Preperation</Link></Menu.Item>
      <Menu.Item><Link to="/experiences">Social Preperation</Link></Menu.Item>
    </Menu>
  </Container>
  <Container className="content">
    <Header inverted as="h1">
      Cover your page.
    </Header>
    <p>
      Cover is a one-page template for building simple and beautiful
      home pages. Download, edit the text, and add your own fullscreen
      background photo to make it your own.
    </p>
    <Button href="/knowledge" size="huge">Knowledge</Button>
    <Button href="/experiences"size="huge">Experiences</Button>
  </Container>
  <Segment inverted vertical as="footer">
    Cover template for <a href="http://semantic-ui.com">Semantic-UI</a>,
    by{" "}
    <a href="https://github.com/semantic-ui-forest">
      @Semantic-UI-Forest
    </a>
    .
  </Segment>
</Segment>
</div>
    </>
  )
}

export default App
