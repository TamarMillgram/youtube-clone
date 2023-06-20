import React from 'react'

export function AppHeader() {

  function onSearchValue() {
  }


  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li className="logo">
            <h1>We<span>Tube</span></h1>
            <p className="slogan">so watch and learn!</p>
          </li>
          <li>
            <form className="search-bar" onSubmit={onSearchValue}>
              <input type="search" name="wiki-search" id="wiki-search" placeholder="search" />
              <button id="wiki-search" className="btn-search"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </li>
        </ul>
      </nav>
    </div>
  )
}
