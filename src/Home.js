import './App.css';
import items from './mediaconfig.json';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-grid">

          {items.map(item =>
            <Link style={{ width: '100%', borderRadius: '10px' }} to={item.url}>

              <div className='card-master'>

                  <img className='media' src={item.thumb} />
                  <h2 style={{ position: 'absolute', top: '30%', zIndex: '1', pointerEvents: 'none'}}>{item.name}</h2>
                  <p style={{ position: 'absolute', top: '45%', zIndex: '1', pointerEvents: 'none' }}>{item.year}</p>

              </div>
            </Link>
          )}

        </div>
      </header>
    </div>
  );
}

export default Home;