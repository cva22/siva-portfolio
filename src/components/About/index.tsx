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
      <div>
        <StarsBackground />
        <div className="w-full py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:pl-10 xl:pl-20">
          <Caption className='border-primary/30 bg-primary/10 text-primary after:bg-primary/10' id='adout-caption'>About</Caption>
          <TypingHeading
            headings={headings}
          />
          <Paragraph className='text-lg'>
            Seasoned DevOps developer, experienced in both enterprise and startup environments, specializing in AWS and Azure cloud infrastructures.
            Passionate about meticulous UI/UX design and prototyping, ensuring seamless and memorable user interactions.
            Proven expertise in stakeholder management, adeptly aligning projects with overarching organizational goals.
            Beyond development, I stand as a visionary architect of transformative digital experiences, always driving innovation with a positive approach.
          </Paragraph>
        </div>
      </div>
    </section >
  );
}
