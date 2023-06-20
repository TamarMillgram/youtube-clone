import React from 'react'
import { useNavigate } from "react-router-dom";

export function AppHeader() {

  const navigate = useNavigate()

  function onClickLogo() {
    navigate('/')
  }

  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li className="logo" onClick={onClickLogo}>
            <h1>We<span>Tube</span></h1>
          </li>
        </ul>
      </nav>
    </div>
  )
}
