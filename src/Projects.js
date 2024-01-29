import './App.css';
import items from './mediaconfig.json';
import { Link } from 'react-router-dom';
function Projects() {
  return (
    <header className="project-header">

      <div className="project-grid-head">
        <div className="lfmt">NAME</div>
        <div className="rfmt">DATE</div>
      </div>
      <div className='thickbar'></div>
      {items.filter(item => item.isproject).map(item =>

        <div style={{ "width": "90%" }}>
          <div className="project-grid-body">
            <div className="lfmt">
            <Link className='project-link' to={item.url}>{item.name.toUpperCase()}
              <div className="underliner"/>
            </Link>
              
            </div>
            <div className="rfmt">{item.year}</div>
          </div>
          <div className='lightbar'></div>
        </div>

      )}
      <div style={{ "width": "90%" }}>
        <div className="project-grid-body">
          <div className="lfmt">COMING SOON</div>
          <div className="rfmt"></div>
        </div>
        <div className='lightbar'></div>
      </div>

    </header>
  );
}

export default Projects;