import React from 'react'

export function PlaylistPreview({ video, renderVideoPlayer }) {

  console.log('hi')

  return (
    <div onClick={() => renderVideoPlayer(video.id.videoId)}>
      <img src={video.snippet.thumbnails.default.url} alt="" />
      <section className="description">
        <h2 className="video-title">{video.snippet.title}</h2>
        <p className="channel-title">{video.snippet.channelTitle}</p>
      </section>
    </div>
  )
}
