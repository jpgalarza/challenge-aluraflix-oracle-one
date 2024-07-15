import { useContext } from 'react'
import './category.css'
import { Card } from '../card/Card'
import { VideoContext } from '../../context/VideoContext'

export const Category = ({ id, name, color }) => {
  const { videos } = useContext(VideoContext);
  
  return (
    <section className="category">
      <div className="container">
        <h2 className="category-title" style={{backgroundColor: color}}>{name}</h2>
        <div className="card-scroll">
          {videos.filter(video => video.category === id)
            .map(video => <Card key={video.id} video={video} categoryColor={color}/>)
          }
        </div>
      </div>
    </section>
  )
}
