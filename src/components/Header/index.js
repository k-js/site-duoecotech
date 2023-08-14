import { NavLink } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
    <section className="header-container">
      <article className="header">
        <h1 className="header__title"> DuoEcoTech </h1>
        <nav className="header__nav">
          <NavLink exact to="/" activeClassName="selected" className="header__nav__item">Início</NavLink>
          <NavLink to="/contact" activeClassName="selected" className="header__nav__item">Contato</NavLink>
        </nav>
      </article>
    </section>
  )
}

export default Header