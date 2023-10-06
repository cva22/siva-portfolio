export default function HyperLinks() {
  return (
    <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left'>
      <a
        href='https://www.linkedin.com/in/sselvaraj22/'
        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        target='_blank'
        rel='noopener noreferrer'
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
        href='https://github.com/sivaish; https://github.com/ithivesolutions'
        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        target='_blank'
        rel='noopener noreferrer'
      >
        <h2 className={`mb-3 text-2xl font-semibold text-lime-500`}>
          Github{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Explore my repositories and research.
        </p>
      </a>
    </div>
  );
}
