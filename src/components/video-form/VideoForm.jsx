import './video-form.css';
import { Input } from "../input/Input";
import { SelectCategory } from "../select-category/SelectCategory";
import { Textarea } from '../textarea/Textarea';
import { Button } from '../button/Button';

export const VideoForm = () => {
  return (
    <form className="form-video">
      <h2 className="form-subtitle">Crear Tarjeta</h2>
      <Input type="text" label="Título" name="title" placeholder="Título del video"/>
      <SelectCategory label="Categoría" name="category" defaultText="Escoja una categoría"/>
      <Input type="text" label="Imágen" name="image" placeholder="Link de la imagen"/>
      <Input type="text" label="Video" name="video" placeholder="Link del video"/>
      <Textarea label="Descripción:" name="description" placeholder="¿De qué se trata este vídeo?" />
      <div className="form-button-container">
        <Button type="submit" text="GUARDAR" />
        <Button type="reset" text="LIMPIAR" />
      </div>
    </form>
  )
}
