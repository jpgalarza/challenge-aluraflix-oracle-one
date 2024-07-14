import { useContext } from 'react';
import Swal from 'sweetalert2';
import './card.css'
import { VideoContext } from '../../context/VideoContext'

export const Card = ({ id, image, categoryColor }) => {
  const { deleteVideo } = useContext(VideoContext);

  const handleDelete = () => {
    Swal.fire({
      title: "Seguro quieres eliminar el video?",
      text: "No podrás revertir esta operación!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteVideo(id)

        Swal.fire({
          title: "Video eliminado!",
          text: "El video ha sido eliminado",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className="card" style={{borderColor: categoryColor}}>
      <div className="card-img-container"><img src={image} alt=""/></div>
      <div className="card-footer" style={{borderColor: categoryColor}}>
        <button onClick={handleDelete} ><i className="fas fa-trash-alt"></i> BORRAR</button>
        <button><i className="fas fa-edit"></i> EDITAR</button>
      </div>
    </div>
  )
}
