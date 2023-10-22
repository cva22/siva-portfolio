import React from 'react';
import { Caption } from '@/components/ui/typography'


export default function About() {
  return (
    <>
      <section
        id="about"
        className='relative z-10 w-full bg-neutrals-900 py-32 flex flex-col justify-center min-h-screen'
      >

        <div className='text-justify'>
          <Caption id='adout-caption'>About</Caption>
          <p>
            I&apos;m a quantified - self, tech, design thinking and sustainable software developer
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
