import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './assets/scss/main.scss';

import { AppHeader } from './cmps/app-header';
import { Home } from './views/home';

function App() {
  return (
    <Router>
      <section className="main-layout app">
        <AppHeader />
        <main>
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </main>
      </section>
    </Router>
  )
}

export default App;