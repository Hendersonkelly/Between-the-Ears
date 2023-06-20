
import React from 'react';
import {Link} from 'react-router-dom'


const BaseLayout = (props) => {
  return (
    <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/knowledge">Knowledge Prep</Link></li>
            <li><Link to="/sensory">Sensory Prep</Link></li>
            <li><Link to="/movies">Movie Item</Link></li>
            <li><Link to="/rides">Rides</Link></li>
            
        </ul>
      {props.children}
    </>
  )
}

export default BaseLayout