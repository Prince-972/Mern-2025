import React from 'react'
import { Link } from 'react-router-dom'
const Hooks = () => {
  return (
    <div><h3>Hooks are here</h3><br></br>
        <Link to='/State'>UseState</Link><br/>
        <Link to='/Effect'>UseEffect</Link><br/>
        <Link to='/Effect2'>UseEffect2</Link>
    </div>
  )
}

export default Hooks