import { Link } from 'react-router-dom';

const title = 'More Then 60,000 Customers';

const desc =
  'Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping';

const clientsList = [
  {
    id: 1,
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education-thumb-1',
    text: 'Join with Us',
  },
  {
    id: 2,
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education-thumb-2',
    text: 'Join with Us',
  },
  {
    id: 3,
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education-thumb-3',
    text: 'Join with Us',
  },
  {
    id: 4,
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education-thumb-4',
    text: 'Join with Us',
  },
  {
    id: 5,
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education-thumb-5',
    text: 'Join with Us',
  },
  {
    id: 6,
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education-thumb-6',
    text: 'Join with Us',
  },
  {
    id: 7,
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education-thumb-7',
    text: 'Join with Us',
  },
];

const LocationSpread = () => {
  return (
    <section className='clients-section style-2 padding-tb'>
      <div className='container'>
        {/* SECTION-HEADER */}
        <div className='section-header text-center'>
          <h2 className='title'>{title}</h2>
          <p>{desc}</p>
        </div>

        {/* MAIN-CONTENT */}
        <div className='section-wrapper'>
          <div className='clients'>
            {clientsList.map((client) => (
              <div className='client-list' key={client.id}>
                <Link to='sign-up' className='client-content'>
                  <span>{client.text}</span>
                </Link>
                <figure className='client-thumb'>
                  <img src={client.imgUrl} alt={client.imgUrl} />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSpread;
