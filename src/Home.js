import './App.css';
import items from './mediaconfig.json';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-grid">

          {items.map(item =>
            <a style={{ width: '100%', borderRadius: '10px' }} href={item.url}>

              <div className='card-master'>

                  <img className='media' src={item.thumb} />
                  <h2 style={{ position: 'absolute', top: '30%', zIndex: '1', pointerEvents: 'none'}}>{item.name}</h2>
                  <p style={{ position: 'absolute', top: '45%', zIndex: '1', pointerEvents: 'none' }}>{item.year}</p>

              </div>
            </a>
          )}

        </div>
      </header>
    </div>
  );
}

export default Home;