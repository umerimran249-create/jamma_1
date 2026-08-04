import { useEffect, useRef, useState } from 'react'

// About: intro + visual, ambition & purpose below.
export default function About() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.muted = true
    const attempt = el.play()
    if (attempt !== undefined) {
      attempt.then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
  }, [])

  const toggleVideo = () => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      void el.play()
    } else {
      el.pause()
    }
  }

  return (
    <section id="about" className="about">
      <div className="about-layout">
        <div className="about-intro">
          <h2 className="display title about-title">About JAMAA</h2>
          <p className="about-tagline">Building Better Businesses</p>
          <p className="about-body">
            In a rapidly evolving business landscape, staying ahead requires more than experience,
            it demands intelligent execution. JAMAA integrates <strong>modern AI capabilities</strong>{' '}
            across our advisory and transformation services, enabling smarter analysis, faster delivery,
            and more informed decision-making while keeping strategic thinking firmly human-led.
          </p>
        </div>

        <div className="about-video-wrap">
          <video
            ref={videoRef}
            className="about-video"
            src="/videos/about-jamaa.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onClick={toggleVideo}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          <button
            type="button"
            className={`about-video-play${playing ? ' is-playing' : ''}`}
            aria-label={playing ? 'Pause video' : 'Play video'}
            onClick={(e) => {
              e.stopPropagation()
              toggleVideo()
            }}
          >
            <i className={`fa-solid fa-${playing ? 'pause' : 'play'}`} />
          </button>
        </div>

        <div className="ap-item about-ambition">
          <div className="about-subhead">Our Ambition</div>
          <p className="about-body">
            To create lasting value for our client and become trusted advisor of choice for
            organizations seeking sustainable growth, strategic clarity and transformative results.
          </p>
        </div>

        <div className="ap-item about-purpose">
          <div className="about-subhead">Our Purpose</div>
          <p className="about-body">
            We engage organizations to build effective processes that create efficient business
            activity, stronger governance, and sustainable profitability through practical
            implementation plan.
          </p>
        </div>
      </div>
    </section>
  )
}
