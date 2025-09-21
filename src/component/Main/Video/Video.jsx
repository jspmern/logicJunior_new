import React, { useState, useEffect } from "react";

const videoList = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/ysz5S6PUM-U",
  "https://www.youtube.com/embed/tgbNymZ7vqY"
];

function Video() {
  const [play, setPlay] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");


  useEffect(() => {
    if (play) {
      // Push a new state to the history stack
      window.history.pushState({ videoOpen: true }, "", window.location.href);
      const onPopState = () => {
        window.location.href = "/";
        window.location.reload();
      };
      window.addEventListener("popstate", onPopState);
      return () => {
        window.removeEventListener("popstate", onPopState);
      };
    }
  }, [play]);

  const handlePlay = () => {
    const randomUrl = videoList[Math.floor(Math.random() * videoList.length)];
    setVideoUrl(randomUrl);
    setPlay(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const handleClose = () => {
    document.body.style.overflow = '';
    window.location.reload();
  };

  return (
    <section
      className="video has-bg-image"
      aria-label="video"
      style={{ backgroundImage: "url('/assets/images/video-bg.png')" }}
    >
      <div className="container">
        <div className="video-card">
          <div
            className="video-banner img-holder has-after"
            style={{ "--width": "", "--height": "" }}
          >
            <img
              src="/assets/images/video-banner.jpg"
              width="970"
              height="550"
              loading="lazy"
              alt="video banner"
              className="img-cover"
            />
            <button className="play-btn" aria-label="play video" onClick={handlePlay}>
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </button>
          </div>
          <img
            src="/assets/images/video-shape-1.png"
            width="1089"
            height="605"
            loading="lazy"
            alt=""
            className="shape video-shape-1"
          />
          <img
            src="/assets/images/video-shape-2.png"
            width="158"
            height="174"
            loading="lazy"
            alt=""
            className="shape video-shape-2"
          />
        </div>
      </div>

      {/* Fullscreen Modal Overlay */}
      {play && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.95)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          transition: 'background 0.3s',
        }}>
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 30,
              right: 40,
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: 40,
              cursor: 'pointer',
              zIndex: 10000,
            }}
            aria-label="Close video"
          >
            &times;
          </button>
          <iframe
            width="90%"
            height="80%"
            src={videoUrl + "?autoplay=1"}
            title="Random Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: '16px',
              boxShadow: '0 8px 40px 0 rgba(0,0,0,0.5)',
              background: '#000',
              maxWidth: 1200,
              maxHeight: 700,
            }}
          ></iframe>
        </div>
      )}
    </section>
  );
}

export default Video;
