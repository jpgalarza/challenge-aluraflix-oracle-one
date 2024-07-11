import { createContext, useState } from "react";
import data from '../data/data.json';

export const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState(data.videos);

  return (
    <VideoContext.Provider 
      value={{videos}}
    >
      {children}
    </VideoContext.Provider>
  )
}

export default VideoContextProvider;