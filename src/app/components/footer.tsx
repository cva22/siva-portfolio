import Image from 'next/image';

export default function Footer() {
  return (
    <div className='grid place-items-center'>
      <h4 className='tracking-widest'>Powered by</h4>

      {/* <a
        href='https://github.com/ithivesolutions'
        target='_blank'
        rel='noopener noreferrer'
      > */}
      <Image
        // className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        src='/ithLogo.svg'
        alt='ITH Logo'
        width={80}
        height={80}
        priority
      />
      {/* </a> */}
    </div>
  );
}
