import React from 'react';

import { Context, useContext } from '../context';
import { getYoutubeCodeFromUrl } from '../util/content';
import { isMobileWidth, isDesktopWidth } from '../util/screen';

const Youtube = ({ code }) => {
  const { getters, setters } = useContext(Context);
  if (!code) return <></>;

  const width = window.innerWidth * 0.95;

  const codeShort = code.includes('https') ? getYoutubeCodeFromUrl(code) : code;

  return (<>
    <div style={{margin: '0 auto', textAlign: 'center' }}>
      <iframe
        width={width}
        height={Math.round(9/16*width)}
        src={`https://www.youtube.com/embed/${codeShort}`}
        frameBorder="0" 
        allowFullScreen
        style={{margin: '25px 10px'}}
      ></iframe>
    </div>
  </>);
}

export default Youtube;