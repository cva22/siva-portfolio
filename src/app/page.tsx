import Profile from './components/profile';
import About from './components/about';
import SkillSet from './components/skillSet';
import WorkProfile from './components/workProfile';
import HyperLinks from './components/hyperLinks';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 container mx-auto'>
      <Profile />

      <About />

      <SkillSet />

      <WorkProfile />

      <HyperLinks />

      <Footer />
    </main>
  );
}
