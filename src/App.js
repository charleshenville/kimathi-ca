import './App.css';
import items from './mediaconfig.json';
import NavBar from './NavBar';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import SubDisplay from './SubDisplay';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />

        {items.map(item =>
          <Route path={item.url} element={<SubDisplay info={item}/>}/>
        )}

        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
