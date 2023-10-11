'use client';

import { event } from '../../gtag';

export default function HyperLinks() {
  const handleButtonClick = (buttonName: string) => {
    // Track the button click event
    event({
      action: 'Click',
      category: 'Hyperlinks',
      label: 'Hyperlink Click Event',
      buttonName: buttonName,
    });
  };

  return (
    // <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
    <div className='grid text-center lg:grid-cols-2 lg:text-left gap-10 py-3'>
      <a
        href='https://www.linkedin.com/in/sselvaraj22/'
        className='group rounded-lg border-2 border-purple-500 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        target='_blank'
        rel='noopener noreferrer'
        onClick={() => handleButtonClick('LinkedIn')}
      >
        <h2 className={`mb-3 text-2xl font-semibold text-lime-500`}>
          LinkedIn{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Let&apos;s connect on LinkedIn!
        </p>
      </a>

      <a
        href='https://github.com/ithivesolutions'
        className='group rounded-lg border-2 border-purple-500 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        target='_blank'
        rel='noopener noreferrer'
        onClick={() => handleButtonClick('GitHub')}
      >
        <h2 className={`mb-3 text-2xl font-semibold text-lime-500`}>
          Github{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Explore my repository and research.
        </p>
      </a>

      {/* <a
        href='https://github.com/ithivesolutions'
        className='group rounded-lg border-2 border-purple-500 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        target='_blank'
        rel='noopener noreferrer'
        onClick={() => handleButtonClick('Resume')}
      >
        <h2 className={`mb-3 text-2xl font-semibold text-lime-500`}>
          Resume{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          A click to Download my Resume.
        </p>
      </a> */}
    </div>
  );
}
