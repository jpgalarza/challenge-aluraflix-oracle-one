import { useContext, useState } from "react";
import "./video-form.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { Input } from "../input/Input";
import { SelectCategory } from "../select-category/SelectCategory";
import { Textarea } from "../textarea/Textarea";
import { Button } from "../button/Button";
import { errorTypes, messages } from "../../js/customErrors";
import { validations } from "../../helpers/validations";
import { VideoContext } from "../../context/VideoContext";

export const VideoForm = () => {
  const [videoData, setVideoData] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: ''
  });
  const [errors, setErrors] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: ''
  });
  const { createVideo } = useContext(VideoContext);
  const navigate = useNavigate();
  

  const handleInputChange = (name, value) => {
    setVideoData({ ...videoData, [name]: value });
  };


  const validate = (target) => {
    const { name, validity } = target;

    setErrors({ ...errors, [name]: ''});

    if(!validity.valid && !validity.customError) {
      errorTypes.forEach((error) => {
        if (validity[error]) {
          setErrors({ ...errors, [name]: messages[name][error] });
        }
      });

      return;
    }

    target.setCustomValidity('');

    validations(target);

    if(validity.customError) {
      setErrors({ ...errors, [name]: messages[name].customError });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const missingData = Object.values(videoData).includes('');
    const isError = Object.values(errors).some(error => error !== '');

    if(!missingData && !isError) {
      createVideo(videoData);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Video creado exitosamente!!",
        showConfirmButton: false,
        timer: 1500
      });

      setTimeout(() => {
        navigate("/");
      }, 1600);
    }
  };

  return (
    <form className="form-video" onSubmit={handleSubmit}>
      <h2 className="form-subtitle">Crear Tarjeta</h2>
      <Input
        type="text"
        name="title"
        label="Título"
        placeholder="Título del video"
        value={videoData.title}
        handleInputChange={handleInputChange}
        validate={validate}
        error={errors.title}
      />
      <SelectCategory
        name="category"
        label="Categoría"
        defaultText="Escoja una categoría"
        value={videoData.category}
        handleInputChange={handleInputChange}
        validate={validate}
        error={errors.category}
      />
      <Input
        type="text"
        name="image"
        label="Imágen"
        placeholder="Link de la imagen"
        value={videoData.image}
        handleInputChange={handleInputChange}
        validate={validate}
        error={errors.image}
      />
      <Input
        type="text"
        name="video"
        label="Video"
        placeholder="Link del video"
        value={videoData.video}
        handleInputChange={handleInputChange}
        validate={validate}
        error={errors.video} 
      />
      <Textarea
        name="description"
        label="Descripción:"
        placeholder="¿De qué se trata este vídeo?"
        value={videoData.description}
        handleInputChange={handleInputChange}
        validate={validate}
        error={errors.description}
      />
      <div className="form-button-container">
        <Button type="submit" text="GUARDAR" errors={errors} data={videoData}/>
        <Button type="reset" text="LIMPIAR" />
      </div>
    </form>
  );
};
