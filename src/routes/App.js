import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '../page/Home'
import Contact from '../page/Contact'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path='/contact' element={<Contact/>} exact />
      </Routes>
    </BrowserRouter>
  )
}