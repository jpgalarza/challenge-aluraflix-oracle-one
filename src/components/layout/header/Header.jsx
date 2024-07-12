import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

export const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <Link to="/"><img className="logo" src={logo} alt=""/></Link>
        <nav>
          <ul className="menu">
            <li><Link to="/"><i className="fas fa-home"></i><span>HOME</span></Link></li>
            <li><Link to="/nuevo-video"><i className="fas fa-plus"></i><span>NUEVO VIDEO</span></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}