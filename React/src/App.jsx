import React from 'react'
import Child from './components/Child'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Skills from './pages/Skills/'
import Login from './pages/Login/'
import Counter from './pages/Counter/'
import Hooks from './pages/Hooks'
import State from './Hooks/State'
import Effect from './Hooks/Effect'
import Effect2 from './Hooks/Effect2'
import Ref from './Hooks/Ref'
import Reducer from './Hooks/Reducer'

import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
const App = () => {
  var Actors=["Ronaldo","Messi","Neymar","Mbappe","Haaland","Harry Kane"]
  var userdetails={name:"Arthur",password:"4687564"}
  return (
    <div>
     <Navbar/>
     <Routes>
<Route path='/' element={<Home items={Actors} users={userdetails} />} />
<Route path='/home' element={<Home items={Actors} users={userdetails} />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/child'
         element={<><Child name="Prince" phonenum="9812763456" dept="IT"/>
                <Child name="Alex Silva" phonenum="9876543210" dept="CSE"/>
         </>}
          />
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/hooks' element ={<Hooks/>}/>
      <Route path='/state' element={<State/>}/>
      <Route path='/effect' element={<Effect/>}/>
      <Route path='/effect2' element={<Effect2/>}/>
      <Route path='/Ref' element={<Ref/>}/>
      <Route path='/Reducer' element={<Reducer/>}/>

     </Routes>
    </div>
  )
}

export default App

// Note: The above code is a React application that uses React Router for navigation between different pages and components. It includes various hooks and components to demonstrate state management, effects, and routing in a React application. The `App` component serves as the main entry point for the application, rendering different components based on the current route.