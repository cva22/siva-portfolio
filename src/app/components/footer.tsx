import Image from 'next/image';

export default function Footer() {
  return (
    <div className='grid place-items-center'>
      <h4 className='tracking-widest'>Powered by</h4>

      <Image
        // className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
        src='/ithLogo.svg'
        alt='ITH Logo'
        width={80}
        height={80}
        priority
      />
    </div>
  );
}
