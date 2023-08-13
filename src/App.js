import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Routes from './routes'
import Footer from './components/Footer'
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes />
        <Footer />
      </Router>
    </div>
  )
}

export default App;
