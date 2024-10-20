import Hero from '@/components/home/Hero';
import HomeCategory from '@/components/home/HomeCategory';
import CategoryShowCase from '@/components/home/CategoryShowCase';
import HomeRegister from '@/components/home/HomeRegister';

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

        {/* HOME-REGISTER */}
        <HomeRegister />
      </main>
    </>
  );
};

export default HomePage;
