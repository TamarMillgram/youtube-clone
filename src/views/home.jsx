import React, { useState, useEffect } from 'react'
import { PlaylistList } from '../cmps/playlist-list'
import { Player } from '../cmps/player'
import { weTubeService } from '../services/service'

export function Home() {
  const [url, setUrl] = useState('')
  const [value, setValue] = useState('Pink')
  const [input, setInput] = useState('')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchVideos() {
      try {
        const videoItems = await weTubeService.askVideo(value)
        setVideos(videoItems)
      } catch (error) {
        console.error(error)
      }
    }

    if (value) {
      fetchVideos()
    }
  }, [value])

  function renderVideoPlayer(vidUrl) {
    setUrl(vidUrl)
  }

  async function onSearchValue(ev) {
    ev.preventDefault()
    const { value } = ev.target
    setValue(input)
    const videoItems = await weTubeService.askVideo(value)
    setVideos(videoItems)
  }

  function handleChange({ target }) {
    setInput(target.value)
  }

  return (
    <div>
      <form className="search-bar" onSubmit={onSearchValue}>
        <input type="search" onChange={handleChange} name="wiki-search" id="wiki-search" placeholder="search" />
        <button id="wiki-search" className="btn-search"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <main className="main-content">
        <section className="video-list">
          <PlaylistList renderVideoPlayer={renderVideoPlayer} videos={videos} />
        </section>
        <section className="video-player">
          <Player url={url} />
        </section>
      </main>
    </div>
  )
}
