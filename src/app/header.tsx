const links = [
    {
        label: 'About',
        selector: '#about',
        href: '/#about',
    },
    {
        label: 'Skills',
        selector: '#skills',
        href: '/#skills',
    },
    // {
    //     label: 'Work',
    //     selector: '#work',
    //     href: '/#work',
    // }
] as const;

function Header() {
    return (
        <>
            <div >
                <header
                    aria-label="Primary"
                    className="fixed top-0 z-40 w-full">
                    <div className='2xl:w-4/5 max-w-7xl mx-auto w-11/12'>
                        <div
                            className='mx-4 mt-4 rounded-full border p-2 transition-colors duration-500 border-neutrals-600 bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50 text-slate-200 text-base font-medium'
                        >
                            <div className='grid grid-cols-3'>
                                <nav
                                    aria-label="Primary"
                                    className="ml-4 hidden items-center gap-x-6 lg:flex"
                                >
                                    {links.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const target = document.querySelector(link.selector);
                                                if (target) {
                                                    target.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                            className='relative flex h-full items-center p-1 text-sm uppercase text-neutrals-50 after:absolute 
                                                after:inset-x-0 after:bottom-[12.25%] after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-neutrals-200 after:to-transparent after:transition-transform 
                                                hover:after:-scale-x-100 focus-visible:after:-scale-x-100'
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}


export default Header;