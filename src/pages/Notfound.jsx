import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../img/notfound.json';

const Notfound = () => {
    const container = useRef(null);
    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        });        
        return () => {
            animation.destroy();
        };
    }, [])
  return (
    <div>
         <div className='text-center flex justify-center w-1/3 m-auto pt-5'>
                <div className='text-center' ref={container}></div>
            </div>
    </div>
  )
}

export default Notfound