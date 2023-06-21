import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div class="ui menu">
  <div class="header item">
  <Link to="/">Home</Link>
  </div>
  <a class="item">
  <Link to="/knowledge">Movie Night</Link>
  </a>
  <a class="item">
  <Link to="/rides">Ride Preperation</Link>
  </a>
  <a class="item">
  <Link to="/experiences">Experiences</Link>
  </a>
  
</div>
  )
}

export default Header