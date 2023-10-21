import React from 'react';

export default function About() {
  return (
    <>
      <section
        id="about"
        className='relative z-10 w-full bg-neutrals-900 py-32 flex flex-col justify-center min-h-screen'
      >
        <div>
          <h2 className='text-3xl text-lime-500 py-3'>ABOUT ME</h2>
        </div>
        <div className='text-justify'>
          <p>
            I'm a quantified - self, tech, design thinking and sustainable software developer
            Passionate in building strategies & problem solving
            Build effiective frameworks based on the business needs
            Work efficiently both as an individual contributor as well as along with a team
            Love trying new things, creating new methods and introducing new ideas - Even it has flaws - do learn from it
          </p>
        </div>
      </section >
    </>
  );
}
