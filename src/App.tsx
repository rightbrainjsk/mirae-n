import { useState, useEffect } from 'react';
import './App.css'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <>
      <div className='data'>
        <p>window.width : {windowDimensions.width}</p>
        <p>window.height : {windowDimensions.height}</p>
      </div>
      <div className='wrap'>
        1280px
      </div>
      <div className='aside'>
        300x100
      </div>
      <div className={'chat' + (windowDimensions.width < 1280 + 60 + 200 ? ' right' : '')}>
        <p>100x100</p>
        <p>가로스크롤 생기면 올라감</p>
      </div>
    </>
  )
}

export default App
