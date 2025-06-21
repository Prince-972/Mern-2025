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


import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
const App = () => {
  var fruits=["apple","banana","grapes"]
  var userdetails={name:"puvi",password:"4687564"}
  return (
    <div>
     <Navbar/>
     <Routes>
<Route path='/' element={<Home items={fruits} users={userdetails} />} />


      <Route path='/about' element={<About/>}/>
  
      <Route path='/contact' element={<Contact/>}/>
       <Route path='/skills' element={<Skills/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route
        path='/child'
         element={<><Child name="Prince" phonenum="9812763456" dept="IT"/>
                <Child name="Alex Silva" phonenum="9876543210" dept="CSE"/>
         </>}
          />
       <Route path='/counter' element={<Counter/>}/>
<Route path='/hooks' element ={<Hooks/>}/>
<Route path='/state' element={<State/>}/>
<Route path='/effect' element={<Effect/>}/>
<Route path='/effect2' element={<Effect2/>}/>


     </Routes>
    </div>
  )
}

export default App



/* <Child name="Bharathi" phonenum="9878786565" dept="IT"/>
      <Child name="Tamil" phonenum="7878756765" dept="CSE"/>
      
      <About/><Contact/>
      <Home items={fruits} users={userdetails} />
     
      <Skills/>
      <Login/>
      <Counter/>*/