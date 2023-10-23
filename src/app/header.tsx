import Image from 'next/image';

import { useState } from 'react';
import useScrollThreshold from '@/hooks/use-scroll-threshold';
import MobileNavigation from './mobile-navigation';
import Container from '@/components/ui/container';
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

const GRACE_THRESHOLD = 12;

function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isScrollThresholdPassed } = useScrollThreshold({ threshold: GRACE_THRESHOLD });

    const isBackgroundShown = isScrollThresholdPassed || isMobileMenuOpen;

    return (
        <>
            <div >
                <header
                    className='fixed top-0 z-40 w-full'>
                    <Container>
                        <div className='2xl:w-4/5 max-w-7xl mx-auto w-11/12'>
                            <div
                                className='mx-4 mt-4 rounded-full border p-2 transition-colors duration-500 border-neutrals-600 bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50 text-slate-200 text-base font-medium'
                            >
                                <div className='grid grid-cols-3'>
                                    <div className="flex items-center lg:hidden">
                                        <MobileNavigation.Toggle
                                            isOpen={isMobileMenuOpen}
                                            onIsOpenChange={setIsMobileMenuOpen}
                                            isBackgroundShown={isBackgroundShown}
                                        />
                                    </div>
                                    <nav
                                        aria-label="Primary"
                                        className='ml-4 hidden items-center gap-x-6 lg:flex'
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
                                    <div className='flex items-center justify-center'>
                                        <a
                                            href="/"
                                            title="Navigate home"
                                        >
                                            <Image
                                                src='/siva.png'
                                                alt='Siva'
                                                width={50}
                                                height={20}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container >
                    <MobileNavigation
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                        links={links}
                    />
                    <MobileNavigation.Overlay
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    />
                </header >
            </div >
        </>
    )
}


export default Header;