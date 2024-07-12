import { VideoForm } from '../../components/video-form/VideoForm';
import './new-video.css';

export const NewVideo = () => {
  return (
    <section className="new-video">
      <div className="container">
        <h1 className="form-title">NUEVO VIDEO</h1>
        <p className="form-description">Complete el formulario para crear una nueva tarjeta de video</p>
        <VideoForm />
      </div>
    </section>
  )
}
