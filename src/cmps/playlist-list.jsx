import React from 'react'
import { PlaylistPreview } from './playlist-preview'

export function PlaylistList({ renderVideoPlayer, videos }) {
  console.log(videos)
  if (!videos?.length) return
  return (
    <ul>
      {videos.map((video, idx) => (
        <li key={idx}>
          <PlaylistPreview video={video} renderVideoPlayer={renderVideoPlayer} />
        </li>
      ))}
      <hr />
    </ul>
  )
}
