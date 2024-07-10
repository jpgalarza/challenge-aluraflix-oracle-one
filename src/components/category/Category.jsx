import './category.css'
import { Card } from '../card/Card'

export const Category = () => {
  const counter = [1,2,3]
  
  return (
    <section className="category">
      <div className="container">
        <h2 className="category-title">FRONT END</h2>
        <div className="card-scroll">
          {counter.map((c, index) => <Card key={index}/>)}
        </div>
      </div>
    </section>
  )
}
