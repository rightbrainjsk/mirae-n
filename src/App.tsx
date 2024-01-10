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
      <div className='w1920'></div>
      <div className='data'>
        <p>window.width : {windowDimensions.width}</p>
        <p>window.height : {windowDimensions.height}</p>
      </div>
      <div className='wrap'>
        1280px
      </div>
      <div className='aside'>
        250x300
      </div>
      <div className={'chat'}>
        <div className='box1'>수업 들어가기</div>
        <p className='box2'>챗봇</p>
      </div>
    </>
  )
}

export default App
