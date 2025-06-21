import React from 'react'
import { Link } from 'react-router-dom'

Hooks = () => {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <Link to='/State'>useState</link>
            <Link to='/Effect'>useEffect</link>
        </div>
    )
}

export default Hooks