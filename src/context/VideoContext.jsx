import { createContext, useState } from "react";
import data from '../data/data.json';

export const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState(data.videos);

  const createVideo = (data) => {
    setVideos([... videos, { id: crypto.randomUUID(), ...data}])
  };

  return (
    <VideoContext.Provider value={{
      videos,
      createVideo
    }}
    >
      {children}
    </VideoContext.Provider>
  )
}

export default VideoContextProvider;