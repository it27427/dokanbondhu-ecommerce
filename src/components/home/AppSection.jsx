import { Link } from 'react-router-dom';

const btnText = 'Sign up for Free';
const title = 'Shop Anytime, Anywhere';
const descriptions =
  'Take shop on your any device with our app & learn all time what you want. Just download and install & start to learn.';

const AppSection = () => {
  return (
    <section className='app-section padding-tb'>
      <div className='container'>
        {/* SECTION-HEADER */}
        <div className='section-header text-center'>
          <Link to={'/sign-up'} className='lab-btn mb-4'>
            {btnText}
          </Link>
          <h2 className='title'>{title}</h2>
          <p>{descriptions}</p>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
