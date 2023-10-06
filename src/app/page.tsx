import Profile from './components/profile';
import About from './components/about';
import SkillSet from './components/skillSet';
import WorkProfile from './components/workProfile';
import HyperLinks from './components/hyperLinks';
import Footer from './components/footer';
import Accordian from './components/experience';

export default function Home() {
  return (
    <section className='min-h-screen flex bg-gradient-to-br from-gray-900 to-cyan-700 text-slate-200 text-base font-medium'>
      <main className='flex flex-col items-center justify-between p-12 container mx-auto grid gap-6'>
        <Profile />

        <About />

        <SkillSet />

        {/* <WorkProfile /> */}

        <Accordian />

        <HyperLinks />

        <Footer />
      </main>
    </section>
  );
}
