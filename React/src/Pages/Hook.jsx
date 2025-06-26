import React from 'react'
import { Link } from 'react-router-dom'

Hooks = () => {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <Link to='/State'>useState</Link>
            <Link to='/Effect'>useEffect</Link>
            <Link to='/Ref'>useRef</Link>
        </div>
    )
}

export default Hooks