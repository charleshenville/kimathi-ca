import './App.css';
import items from './mediaconfig.json';
import { Link } from 'react-router-dom';

function Home() {

  // function cf(string) {
  //   console.log(string)
  //   return string.substring(0, 1).toUpperCase() + string.substring(1);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div className="content-grid">

          {items.map(item =>
            <Link style={{ width: '100%', borderRadius: '10px' }} to={item.url}>

              <div className='card-master'>

                {(item.thumb.endsWith('.mp4') || item.thumb.endsWith('.mov')) ?
                  <video className='media' id="video" autoPlay loop muted playsInline>
                    <source src={item.thumb} type="video/mp4" />
                  </video> :
                  <img className='media' src={item.thumb} />}
                <h2 style={{ position: 'absolute', top: '30%', zIndex: '1', pointerEvents: 'none' }}>{item.name}</h2>
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