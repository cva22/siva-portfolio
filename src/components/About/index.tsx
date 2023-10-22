import React from 'react';
import { Caption, Paragraph } from '@/components/ui/typography'
import StarsBackground from '@/components/stars-background';
import TypingHeading from '@/components/typing-heading';

const headings = [
  'Developer',
  'Designer',
  'Problem solver',
  'Freelancer',
  'Consultant',
  'Coffeeholic',
];

export default function About() {
  return (
    <section
      id="about"
      className='relative z-10 w-full bg-neutrals-900 py-32 flex flex-col items-center justify-center min-h-screen'
    >
      <div
      // className="flex min-h-screen w-full items-center max-lg:flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,min(91.666667%/2,40rem))_minmax(0,min(91.666667%/2,40rem))_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,min(80%/2,40rem))_minmax(0,min(80%/2,40rem))_minmax(0,1fr)]"
      >
        <StarsBackground />
        <div className="w-full py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:pl-10 xl:pl-20">
          <Caption id='adout-caption'>About</Caption>
          <TypingHeading
            headings={headings}
          />
          <Paragraph>
            I&apos;m a quantified - self, tech, design thinking and sustainable software developer
            Passionate in building strategies & problem solving
            Build effiective frameworks based on the business needs
            Work efficiently both as an individual contributor as well as along with a team
            Love trying new things, creating new methods and introducing new ideas - Even it has flaws - do learn from it
          </Paragraph>
        </div>
      </div>
    </section >
  );
}
