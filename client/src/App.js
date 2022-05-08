import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LandinPage from './components/LandingPage';
import Creation from './components/Creation';
import style from "./App.module.css"
import Details from './components/Details';


function App() {
  return (
    <div className={style.App}>
      <Routes>
      <Route path='/' element={<LandinPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/create' element={<Creation/>}/>
      <Route path='/home/:id' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
