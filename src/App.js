import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './assets/scss/main.scss';

// import { store } from './store/store';
import { AppHeader } from './cmps/app-header';
import { Home } from './views/home';
// import { AppFooter } from './cmps/app-footer';



function App() {
  return (
    // <Provider store={store}>
    <Router>
      <section className="main-layout app">
        <AppHeader />
        <main>
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </main>
        {/* <AppFooter /> */}
      </section>
    </Router>
    // </Provider>
  )
}

export default App;
