import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const Top = () => {
  return (
    <Menu stackable>
    <Menu.Item active><Link className='link page' to="/">Home</Link></Menu.Item>
    <Menu.Item><Link  className='link page' to="/movies">Movie Night</Link></Menu.Item>
    <Menu.Item><Link className='link page' to="/rides">Rides</Link></Menu.Item>
    <Menu.Item><Link className='link page' to="/experiences">Social Skills</Link></Menu.Item>
    <Menu.Item  position='right'><Link className='link name' to="/">Between the Ears</Link></Menu.Item>
   
 </Menu>
  )
}

export default Top