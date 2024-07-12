import './card.css'

export const Card = ({ id, image, categoryColor }) => {
  return (
    <div className="card" style={{borderColor: categoryColor}}>
      <div className="card-img-container"><img src={image} alt=""/></div>
      <div className="card-footer" style={{borderColor: categoryColor}}>
        <button><i className="fas fa-trash-alt"></i> BORRAR</button>
        <button><i className="fas fa-edit"></i> EDITAR</button>
      </div>
    </div>
  )
}
