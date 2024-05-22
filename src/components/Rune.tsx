import s from './Rune.module.css'
import video1 from '../assets/Rune_01_VP9.webm'
import video2 from '../assets/Rune_01.mp4'
import video3 from '../assets/Rune_01.json'
import Lottie from 'lottie-react'

const Rune = () => {
  return (
    <div className={s.list}>
      <div className={s.videoWrapper}>
        <div className={s.videoTitle}>json</div>
        <Lottie animationData={video3} loop autoplay className={s.video} />
      </div>

      <div className={s.videoWrapper}>
        <div className={s.videoTitle}>webm</div>
        <video autoPlay muted loop className={s.video}>
          <source src={video1} type="video/webm" />
          Your browser does not support video.
        </video>
      </div>

      <div className={s.videoWrapper}>
        <div className={s.videoTitle}>mp4</div>
        <video autoPlay muted loop className={s.video}>
          <source src={video2} type="video/mp4" />
          Your browser does not support video.
        </video>
      </div>
    </div>
  )
}

export default Rune
