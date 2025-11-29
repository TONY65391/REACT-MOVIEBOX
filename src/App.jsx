import './App.css'
import Landing from './pages/Landing';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';

function App(){
  return(
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route />
      <Route />
    </Routes>
  )
}
export default App;