import { Category } from "../../components/category/Category"
import './home.css'
import backgroundImg from "../../assets/images/banner-background-img.png";
import bannerImage from "../../assets/images/banner-image.png"

export const Home = () => {
  const counter = [1,2,3]

  return (
    <main>
    <section className="banner" style={{backgroundImage: `url(${backgroundImg})`}}>
      <div className="container banner-container">
        <div className="info-banner">
          <h1 className="banner-title">Front End</h1>
          <h3 className="banner-subtitle">Challenge React</h3>
          <p className="banner-description">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        <div className="banner-img-container">
          <img src={bannerImage} alt=""/>
        </div>
      </div>
    </section>
    {counter.map((c, index) => <Category key={index}/>)}
  </main> 
  )
}

