import React from 'react'
import About from './About'
import image from '../assets/images/image.jpg'
import '../App.css'

const Home = ({items,users}) => {
  return (
    <div>Home
  
      <ol type="i">
        {items.map((Actor)=>(<li>{Actor}</li>))}
      </ol>
      <h3>{users.name} {users.password}</h3>

      <About items={items} users={users}/>
      <img src={image} alt="react" className="home-image" />
    </div>
  
  )
}

export default Home