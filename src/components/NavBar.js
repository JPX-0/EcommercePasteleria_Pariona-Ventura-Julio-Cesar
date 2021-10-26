import imgLogo from '../img/logo.jpg'

function NavBar() {
  return (
    <header className="header">
      <nav className="header__container">
        <a href="#" className="header__logo">
          <img src={imgLogo} alt="Pasteleria Yuumy"/>
          <span>Pasteleria Yuumy</span>
        </a>
        <ul className="header__menu">
          <li className="header__list"><a href="#" className="header__title">Inicio</a></li>
          <li className="header__list"><a href="#" className="header__title">Tienda</a></li>
          <li className="header__list"><a href="#" className="header__title">Sobre Nosotros</a></li>
        </ul>
        <button className="btn btn__sesion header__title">Sesion</button>
      </nav>
    </header>
  )
}
export default NavBar;