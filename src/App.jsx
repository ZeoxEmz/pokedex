import './App.css'
import { Create } from './components/create/create'
import { Detail } from './components/detail/detail'
import { Home } from './components/home/home'
import { Landing } from './components/landing/landing'
import { Route, Routes, Router } from 'react-router-dom'

function MainApp() {
  return (
    <div className='app'>
      <h1>hola</h1>
      <Router>
        <Routes basename="/pokedex">
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/crear' element={<Create/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default MainApp 
