import { createContext, useState } from "react";
import data from '../data/data.json';

export const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState(data.videos);

  const createVideo = (data) => {
    setVideos([... videos, { id: crypto.randomUUID(), ...data}])
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };
  

  return (
    <VideoContext.Provider value={{
      videos,
      createVideo,
      deleteVideo
    }}
    >
      {children}
    </VideoContext.Provider>
  )
}

export default VideoContextProvider;