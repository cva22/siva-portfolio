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
            I&apos;m a software developer specialized in quantified-self, tech innovation, and sustainable design.
            <br />
            I build tailored frameworks to meet business needs and thrive both solo and in teams.
            <br />
            Always eager to innovate and learn from every experience.
            <br />
            <br />
            I excel in stakeholder management, skillfully aligning projects with organizational objectives. My career traverses
            both enterprise and startup landscapes, providing me with a distinctive perspective on fostering innovation. I
            embrace challenges with curiosity and a positive outlook, consistently pursuing innovative solutions that deliver
            concrete results.
          </Paragraph>
        </div>
      </div>
    </section >
  );
}
