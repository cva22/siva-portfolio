import React from 'react';

export default function Intro() {
  return (
    <section
      className='relative z-10 w-full bg-gradient-to-br from-neutrals-800 to-neutrals-900 overflow-hidden rounded-lg py-32 flex flex-col items-center justify-center min-h-screen'
    >
      <div className='text-xl p-10 text-lime-500'>Hello, I&apos;m</div>
      <div className='text-6xl tracking-wider text-purple-500 hover:text-lime-500 uppercase p-10'>
        <span className='text-lime-500'>s</span>iva <span className='text-lime-500'>s</span>elvaraj
      </div>
      <hr className='w-32 h-0.5 my-8 bg-lime-500 border-0'></hr>
    </section >
  );
}

