import Profile from './components/profile';
import About from './components/about';
import SkillSet from './components/skillSet';
import WorkProfile from './components/workProfile';
import HyperLinks from './components/hyperLinks';
import Footer from './components/footer';
import Accordian from './components/experience';

export default function Home() {
  return (
    <section className='min-h-screen flex bg-gradient-to-br from-pink-600 to-cyan-500 text-slate-200 text-lg font-medium'>
      <main className='flex flex-col items-center justify-between p-12 container mx-auto'>
        <Profile />
        <br />

        <About />

        <br />

        <SkillSet />

        {/* <WorkProfile /> */}

        <br />

        <Accordian />

        <HyperLinks />

        {/* <Footer /> */}
      </main>
    </section>
  );
}
