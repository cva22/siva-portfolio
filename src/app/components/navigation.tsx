export default function Navigation() {
  return (
    <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
      <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
        <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          &nbsp;Home&nbsp;
        </button>
        &nbsp;|&nbsp;
        <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          &nbsp;About Me&nbsp;
        </button>
        &nbsp;|&nbsp;
        <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          &nbsp;Services&nbsp;
        </button>
        &nbsp;|&nbsp;
        <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          &nbsp;Contact&nbsp;
        </button>
      </p>
    </div>
  );
}
