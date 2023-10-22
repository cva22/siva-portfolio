import React from 'react';

export default function Intro() {
  return (
    <section
      className='relative z-10 w-full bg-gradient-to-br from-neutrals-900 to-neutrals-800/70 overflow-hidden rounded-lg py-32 flex flex-col items-center justify-center min-h-screen'
    >
      <div className='text-xl p-20'>Hello, I&apos;m</div>
      <div className='text-6xl tracking-wider text-lime-500 hover:text-purple-500 capitalize p-20'>
        siva selvaraj
      </div>
      <hr className='w-32 h-0.5 my-8 bg-purple-500 border-0'></hr>
    </section >
  );
}

