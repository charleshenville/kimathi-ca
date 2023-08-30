import './App.css';
import React from 'react';

function SubDisplay({ info }) {

  const files = info.subfiles

  return (
    <header className="flex-sub">
      {files.map((file, index) => (
        <div key={index} className="media-sub">
          {(file.endsWith('.mp4') || file.endsWith('.mov')) ? (
            <video style={{width:'100%'}} controls>
              <source src={info.dir+'/'+file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img style={{width:'100%'}} src={info.dir+'/'+file} alt={`Image ${index + 1}`} />
          )}
        </div>
      ))}
    </header>
  );
}

export default SubDisplay;
