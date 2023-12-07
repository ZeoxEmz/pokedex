import { useEffect } from 'react'
import './App.css'
import { Create } from './components/create/create'
import { Detail } from './components/detail/detail'
import { Home } from './components/home/home'
import { Landing } from './components/landing/landing'
import { Route, Routes } from 'react-router-dom'

function App() {
  useEffect(() => {
    console.log('Permissions-Policy:', document.currentScript.crossOrigin);
  }, []);  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/crear' element={<Create/>}/>
      </Routes>
    </div>
  )
}

export default App
