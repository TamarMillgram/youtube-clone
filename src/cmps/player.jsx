import React from 'react'

export function Player({ url }) {
  return (
    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${url}?autoplay=1`}
      frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
    </iframe>
  )
}
