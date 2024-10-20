import Hero from '@/components/Hero';
import HomeCategory from '@/components/HomeCategory';

const HomePage = () => {
  return (
    <>
      <main className='main-section'>
        {/* HERO-SECTION */}
        <Hero />

        {/* HOME-CATEGORY */}
        <HomeCategory />
      </main>
    </>
  );
};

export default HomePage;
