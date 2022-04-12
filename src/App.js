import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { login } from './components/login'

import './App.css'

import Browse from './pages/browse'

login()

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Browse />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
