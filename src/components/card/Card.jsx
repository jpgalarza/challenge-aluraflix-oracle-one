import './card.css'
import videoImage from '../../assets/images/frontend-img-1.png'

export const Card = () => {
  return (
    <div className="card">
      <div className="card-img-container"><img src={videoImage} alt=""/></div>
      <div className="card-footer">
        <button><i className="fas fa-trash-alt"></i> BORRAR</button>
        <button><i className="fas fa-edit"></i> EDITAR</button>
      </div>
    </div>
  )
}
