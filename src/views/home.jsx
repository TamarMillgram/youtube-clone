import React, { useState, useEffect } from 'react';
// import { PlaylistList } from '../cmps/playlist-list';
import { PlaylistList } from '../cmps/playlist-list'
import { Player } from '../cmps/player';
import { weTubeService } from '../services/service';

export function Home() {
  const [url, setUrl] = useState('');
  const [value, setValue] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const videoItems = await weTubeService.askVideo(value);
        setVideos(videoItems);
      } catch (error) {
        console.error(error);
      }
    }

    if (value) {
      fetchVideos();
    }
  }, [value]);

  function renderVideoPlayer(vidUrl) {
    console.log(vidUrl)
    setUrl(vidUrl);
    console.log(url)
  }

  async function onSearchValue(ev) {
    ev.preventDefault();
    const { value } = ev.target;
    setValue(value);
    const videoItems = await weTubeService.askVideo(value);
    setVideos(videoItems);
  }

  console.log(videos);

  return (
    <div>
      <form className="search-bar" onSubmit={onSearchValue}>
        <input type="search" name="wiki-search" id="wiki-search" placeholder="search" />
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
      <section className="wikipedia"></section>
    </div>
  );
}
