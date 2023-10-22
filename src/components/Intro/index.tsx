import React from 'react';
import TypingHeading from '@/components/typing-heading';

const headings = [
  'Developer',
  'Designer',
  'Problem solver',
  'Freelancer',
  'Consultant',
  'Coffeeholic',
];

export default function Intro() {
  return (
    <>
      <section
        className='relative z-10 w-full bg-neutrals-900 py-32 flex flex-col justify-center min-h-screen'
      >
        <div className='text-sm'>Hello, I&apos;m</div>

        <div className='text-6xl tracking-wider text-lime-500 hover:text-purple-500'>
          SIVA SELVARAJ
        </div>
        <div>
          <TypingHeading
            // client: visible
            headings={headings}
          />
        </div>
        <hr className='w-32 h-0.5 my-8 bg-purple-500 border-0'></hr>
      </section>
    </>
  );
}

