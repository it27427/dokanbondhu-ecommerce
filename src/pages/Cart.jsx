import BannerSection from '@/components/global/BannerSection';

const Cart = () => {
  return (
    <main className='main-section'>
      <BannerSection title='Shopping Cart' currentPage='Cart' />

      <section>
        <div className='container'>
          <h2>Cart</h2>
        </div>
      </section>
    </main>
  );
};

export default Cart;