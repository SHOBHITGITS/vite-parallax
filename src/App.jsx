import './App.css'
import moon from './assets/fullmoon.jpg';
import land from './assets/land.png';
import flying from './assets/flyingMan.gif';
import Footer from './components/Footer';
import { useRef } from 'react';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function App(){
    const ref=useRef();

  return (
    <div className='container'>

      <Parallax pages={4} ref={ref}>

        <ParallaxLayer 
        offset={0}
        speed={1}
        factor={2}
        style={{
          backgroundImage: `url(${moon})`,
          backgroundSize:'cover',
        }}/>
           
       

        <ParallaxLayer 
          offset={2}
          speed={1}
          factor={4}
          style={{
            
            backgroundImage:`url(${land})`,
            backgroundSize:'cover',
          }}
        >  </ParallaxLayer>

        <ParallaxLayer 
          offset={0.2}
          speed={0.05}
          onClick={()=>ref.current.scrollTo(3)}
        >
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3.2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
        </ParallaxLayer>

          <ParallaxLayer className='flex flex:col justify-center items-center'
            sticky={{ start:0.2, end: 3.9 }}
          >
              <img  src={flying} className="mx-auto w-2/5  md:w-4/5"/>
          </ParallaxLayer>

      </Parallax>
      {/* <Footer/> */}
      </div>
     
  );
}

export default App
