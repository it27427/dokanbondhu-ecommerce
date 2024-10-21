import Hero from '@/components/home/Hero';
import HomeCategory from '@/components/home/HomeCategory';
import CategoryShowCase from '@/components/home/CategoryShowCase';
import HomeRegister from '@/components/home/HomeRegister';
import LocationSpread from '@/components/home/LocationSpread';
import HomeAbout from '@/components/home/HomeAbout';
import AppSection from '@/components/home/AppSection';
import HomeSponsor from '@/components/home/HomeSponsor';

const HomePage = () => {
  return (
    <main className='main-section'>
      {/* HERO-SECTION */}
      <Hero />

      {/* HOME-CATEGORY */}
      <HomeCategory />

      {/* CATEGORY-SHOWCASE */}
      <CategoryShowCase />

      {/* HOME-REGISTER */}
      <HomeRegister />

      {/* LOCATION-SPREAD */}
      <LocationSpread />

      {/* ABOUT-SECTION */}
      <HomeAbout />

      {/* APP-SECTION */}
      <AppSection />

      {/* SPONSORS-SECTION */}
      <HomeSponsor />
    </main>
  );
};

export default HomePage;
