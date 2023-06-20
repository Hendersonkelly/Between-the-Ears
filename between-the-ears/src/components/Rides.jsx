import React, {useEffect} from 'react'
import data from '../assets/rides'
import {useDispatch, useSelector} from 'react-redux'
import { loadRides } from '../actions/rideActions'


const Rides = () => {
  console.log("in data",data);
  const dispatch = useDispatch()
  const rides = useSelector(state=>state.rides.rides)
  console.log("Hello", rides);
  useEffect(() => {
    
    dispatch(loadRides(data))
    
  }, [])
  return (
    <>
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