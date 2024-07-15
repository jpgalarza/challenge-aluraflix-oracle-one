import { createContext, useState } from "react";
import data from '../data/data.json';

export const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState(data.videos);
  const [videoEdit, setVideoEdit] = useState(null);

  const createVideo = (data) => {
    setVideos([... videos, { id: crypto.randomUUID(), ...data}])
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  const editVideo = (video) => {
    setVideoEdit(video);
  }

  const resetVideoEdit = () => {
    setVideoEdit(null);
  }

  const updateVideo = (video) => {
    setVideos(videos.map(vid => {
      if(vid.id === video.id) {
        return video;
      }
      return vid;
    }))
  }
  

  return (
    <VideoContext.Provider value={{
      videos,
      videoEdit,
      createVideo,
      deleteVideo,
      editVideo,
      resetVideoEdit,
      updateVideo
    }}
    >
      {children}
    </VideoContext.Provider>
  )
}

export default VideoContextProvider;