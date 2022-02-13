import { useRef } from 'react'
import { Video, CloudinaryContext } from 'cloudinary-react'
const VideoPlayer = () => {
  const videoRef = useRef()
  return (
    <CloudinaryContext cloud_name='wealthguard-insurance-group'>
      <div>
        <Video
          publicId='yacht-video-1_x2dp0w'
          width='100%'
          innerRef={videoRef}
          playsInline
          autoPlay
          loop
          muted
          poster='https://res.cloudinary.com/wealthguard-insurance-group/image/upload/v1644790049/yacht-poster_x783il.png'
        />
      </div>
    </CloudinaryContext>
  )
}
export default VideoPlayer
