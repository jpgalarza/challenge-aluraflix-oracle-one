import "./modal.css";
import { VideoForm } from "../video-form/VideoForm";
import { useContext } from "react";
import { VideoContext } from "../../context/VideoContext";

export const Modal = () => {
  const { videoEdit, resetVideoEdit} = useContext(VideoContext)

  if(!videoEdit) return;

  return (
    <>
      <div className="overlay"></div>
      <dialog open={videoEdit} className="dialog">
        <button className="close" onClick={resetVideoEdit}>
          <i className="far fa-times-circle"></i>
        </button>
        <VideoForm />
      </dialog>
    </>
  );
};
