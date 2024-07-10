import './header.css'
import logo from '../../../assets/images/logo.png'

export const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <a href=""><img className="logo" src={logo} alt=""/></a>
        <nav>
          <ul className="menu">
            <li><a href=""><i className="fas fa-home"></i><span>HOME</span></a></li>
            <li><a href=""><i className="fas fa-plus"></i><span>NUEVO VIDEO</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}