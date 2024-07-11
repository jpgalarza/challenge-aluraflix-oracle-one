import './card.css'

export const Card = ({ id, image }) => {
  return (
    <div className="card">
      <div className="card-img-container"><img src={image} alt=""/></div>
      <div className="card-footer">
        <button><i className="fas fa-trash-alt"></i> BORRAR</button>
        <button><i className="fas fa-edit"></i> EDITAR</button>
      </div>
    </div>
  )
}
