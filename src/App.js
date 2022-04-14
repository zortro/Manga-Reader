import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { login } from './components/login'

import './App.css'
import './assets/css/navbar.css'

import Nav from './pages/nav'
import Results from './pages/results'

login()

function App() {

  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Results />} />
        </Routes>
      </Router>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>
    </>
  );
}

export default App;
