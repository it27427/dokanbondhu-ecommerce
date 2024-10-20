import Hero from '@/components/Hero';
import HomeCategory from '@/components/HomeCategory';
import CategoryShowCase from '@/components/CategoryShowCase';

const HomePage = () => {
  return (
    <>
      <main className='main-section'>
        {/* HERO-SECTION */}
        <Hero />

        {/* HOME-CATEGORY */}
        <HomeCategory />

        {/* CATEGORY-SHOWCASE */}
        <CategoryShowCase />
      </main>
    </>
  );
};

export default HomePage;
