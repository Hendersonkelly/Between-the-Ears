import React, {useState} from 'react'
import '../css/pages.css'

import Header from './Header'
import { Button } from 'semantic-ui-react'





const Knowledge = () => {
return(
<>
<Header/>

<Button href="/movies" size='massive'>Movie Night</Button>
<Button href="/rides" size='massive'>Ride Prep</Button>
    
    </>


)
  

}
export default Knowledge


