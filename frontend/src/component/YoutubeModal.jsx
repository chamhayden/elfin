import React from 'react';
import Youtube from './Youtube';

const YoutubeModal = ({ url, close }) => {
  return (
    <div
      style={{
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'blue',
        display: url ? 'block' : 'none',
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 'calc(50% - 120px)',
          marginTop: '40px',
          fontSize: '2em',
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '5px',
          padding: '5px 10px 0px 10px',
          cursor: 'pointer',
        }}
        onClick={close}
      >
        ❌ Close Video 
      </div>
      <div style={{ marginTop: '100px' }}>
        <Youtube code={url} />
      </div>
    </div>
  )
};

export default YoutubeModal;
