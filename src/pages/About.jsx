import { render } from '@testing-library/react';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../img/working.json';

const About = () => {
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
        <div className="w-4/5 m-auto">
            <h2 className='font-semibold text-2xl text-center py-2'>Welcome to Nifty It Solution</h2>
            <div className='text-center flex justify-center w-1/3 m-auto pt-5'>
                <div className='text-center' ref={container}></div>
            </div>
        </div>
    )
}

export default About