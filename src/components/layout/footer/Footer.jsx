import './footer.css'
import logo from '../../../assets/images/logo.png'

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img className="logo" src={logo} alt=""/>
        <p>AluraFlix - Oracle Next Education</p>
        <p>&copy; 2024 by JPGalarza</p>
      </div>
    </footer>
  )
}
