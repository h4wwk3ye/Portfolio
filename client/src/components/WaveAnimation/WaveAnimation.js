import React from 'react';
import './waveAnimation.css';

export default function WaveAnimation() {
  return (
    <div className='waveWrapper waveAnimation'>
      <div className='waveWrapperInner bgTop'>
        <div className='wave waveTop' />
      </div>
      <div className='waveWrapperInner bgMiddle'>
        <div className='wave waveMiddle' />
      </div>
      <div className='waveWrapperInner bgBottom'>
        <div className='wave waveBottom' />
      </div>
    </div>
  );
}
