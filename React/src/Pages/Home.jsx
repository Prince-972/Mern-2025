import React from 'react'

const Home = ({items,users}) => {
  return (
 
    <div>Home
  
      <ol type="i">
        {items.map((fruit)=>(<li>{fruit}</li>))}
      </ol>
      <h3>{users.name} {users.password}</h3>
    </div>
  
  )
}

export default Home