'use client'

import React, { useContext, useRef } from 'react';


import StarsBackground from '@/components/stars-background';
import MatrixBackground from '@/components/matrix-background';

import Header from '@/app/header';
import Intro from '@/components/Intro';
import About from '@/components/About';
import SkillSet from '@/components/SkillSet';
import Experience from '@/components/Experience';
import HyperLinks from '@/components/HyperLinks';
// import Footer from '@/components/Footer';
import ScrollContext from './contexts/ScrollContext';
// import Work from '@/components/Work';


export default function Home() {

  const targetRef = useRef(null);

  //  <StarsBackground /*client: visible*/ />
  // <MatrixBackground /*client: visible*/ />

  return (
    <>
      <ScrollContext.Provider value={targetRef}>
        <Header />
        <section className='min-h-screen flex text-slate-200 text-base font-medium'>
          {/* bg-gradient-to-br from-gray-900 to-cyan-700 */}
          {/* <section> */}

          <div className='flex flex-col items-center justify-between p-12 container mx-auto gap-6'>
            <div className='flex flex-col items-center justify-between p-12 container mx-auto grid gap-6'>
              <Intro />
              <About />
              <SkillSet />
              {/* <Experience /> */}
              {/* <HyperLinks /> */}
              {/* <Work /> */}
              {/* <Footer /> */}
            </div>
          </div>
        </section>
      </ScrollContext.Provider>
    </>
  );
}
