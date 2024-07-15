import { useContext, useEffect, useState } from "react";
import { VideoContext } from "../../context/VideoContext";
import { Navigate, useParams } from "react-router-dom";
import './video.css'


export const Video = () => {
  const { videos } = useContext(VideoContext)
  const [video, setVideo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const selectedVideo = videos.find(vid => vid.id === id)
    if(selectedVideo) {
      setVideo(selectedVideo);
    }else {
      Navigate("/not-found")
    }
  }, [id, videos])

  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)? match[2] : null;
}

  if(Object.keys(video).length === 0) return;
  
  return (
    <main>
      <section>
        <div className="container video-container">
          <div className="video-info">
            <h1>{video.title}</h1>
            <p>{video.description}</p>
          </div>
          <div className="video">
          <iframe width="100%" height="auto" src={`https://www.youtube.com/embed/${getVideoId(video.video)}`} frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
