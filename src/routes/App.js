import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '../page/Home'
import Contact from '../page/Contact'
import { About } from '../page/About'
import { Services } from '../page/Services'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path='/contact' element={<Contact/>} exact />
        <Route path='/about' element={<About/>} exact />
        <Route path='/services' element={<Services/>} exact />
      </Routes>
    </BrowserRouter>
  )
}