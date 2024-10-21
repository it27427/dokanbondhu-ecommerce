import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const subTitle = 'Why Choose Us';
const title = 'Become a Marchant';
const desc =
  'Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn';
const btnText = 'Apply Now';

const countList = [
  {
    id: 1,
    iconName: 'icofont-users-alt-4',
    count: '12600',
    text: 'Marchant Enrolled',
  },
  {
    id: 2,
    iconName: 'icofont-graduate-alt',
    count: '30',
    text: 'Certified Courses',
  },
  {
    id: 3,
    iconName: 'icofont-notification',
    count: '100',
    text: 'Rewards and GitCards',
  },
];

const HomeAbout = () => {
  return (
    <section className='instructor-section style-2 padding-tb section-bg-ash'>
      <div className='container'>
        <div className='section-wrapper'>
          <div className='row g-4 align-align-items-center justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1'>
            <div className='col'>
              {countList.map((counter) => (
                <div key={counter.id} className='count-item'>
                  <div className='count-inner'>
                    <div className='count-icon'>
                      <i className={`${counter.iconName}`}></i>
                    </div>
                    <div className='count-content'>
                      <h2>
                        <span className='count'>
                          <CountUp end={counter.count} />
                          <span>+</span>
                        </span>
                      </h2>
                      <p>{counter.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='col'>
              <div className='instructor-content'>
                <h4 className='subtitle'>{subTitle}</h4>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>
                <Link to='/sign-up' className='lab-btn'>
                  {btnText}
                </Link>
              </div>
            </div>

            <div className='col'>
              <figure>
                <img
                  src='/src/assets/images/instructor/01.png'
                  alt='instructor-thumbnail'
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
