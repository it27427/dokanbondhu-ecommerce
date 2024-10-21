import { Tooltip as ReactTooltip } from 'react-tooltip';

const title = 'About DokanBondhu';
const desc =
  'Eduaid theme number one world class university in the world There are student are studing always in this university for all time.';
const ItemTitle = 'Categories';
const quickTitle = 'Quick Links';
const tweetTitle = 'Recent Tweets';

const addressList = [
  {
    id: 1,
    iconName: 'icofont-google-map',
    text: ' New York, USA.',
  },
  {
    id: 2,
    iconName: 'icofont-phone',
    text: ' +880 123 456 789',
  },
  {
    id: 3,
    iconName: 'icofont-envelope',
    text: ' info@shopcart.com',
  },
];

const socialList = [
  {
    id: 1,
    iconName: 'icofont-facebook',
    href: 'https://facebook.com',
    className: 'facebook',
    target: '_blank',
    title: 'Follow us on Facebook',
  },
  {
    id: 2,
    iconName: 'icofont-twitter',
    href: 'https://x.com/',
    className: 'twitter',
    target: '_blank',
    title: 'Follow us on Twitter',
  },
  {
    id: 3,
    iconName: 'icofont-linkedin',
    href: 'https://linkedin.com',
    className: 'linkedin',
    target: '_blank',
    title: 'Follow us on Linkedin',
  },
  {
    id: 4,
    iconName: 'icofont-instagram',
    href: 'https://instagram.com',
    className: 'instagram',
    target: '_blank',
    title: 'Follow us on Instagram',
  },
  {
    id: 5,
    iconName: 'icofont-pinterest',
    href: 'https://pinterest.com',
    className: 'pinterest',
    target: '_blank',
    title: 'Follow us on Pinterest',
  },
];

const ItemList = [
  {
    id: 1,
    text: 'All Products',
    href: '/shop',
  },
  {
    id: 2,
    text: 'Shop',
    href: '/shop',
  },
  {
    id: 3,
    text: 'Blog',
    href: '/blog',
  },
  {
    id: 4,
    text: 'About',
    href: '/about',
  },
  {
    id: 5,
    text: 'Policy',
    href: '#',
  },
  {
    id: 6,
    text: 'FAQs',
    href: '/about',
  },
];

const quickList = [
  {
    id: 1,
    text: 'Summer Sessions',
    href: '#',
  },
  {
    id: 2,
    text: 'Events',
    href: '#',
  },
  {
    id: 3,
    text: 'Gallery',
    href: '#',
  },
  {
    id: 4,
    text: 'Forums',
    href: '#',
  },
  {
    id: 5,
    text: 'Privacy Policy',
    href: '#',
  },
  {
    id: 6,
    text: 'Terms of Use',
    href: '#',
  },
];

const tweetList = [
  {
    id: 1,
    iconName: 'icofont-twitter',
    desc: (
      <p>
        Aminur islam <a href='#'>@ShopCart Greetings! #HTML_Template</a> Grab
        your item, 50% Big Sale Offer !!
      </p>
    ),
  },
  {
    id: 2,
    iconName: 'icofont-twitter',
    desc: (
      <p>
        Somrat islam <a href='#'>@ShopCart Hey! #HTML_Template</a> Grab your
        item, 50% Big Sale Offer !!
      </p>
    ),
  },
];

const footerbottomList = [
  {
    id: 1,
    text: 'Faculty',
    href: '#',
  },
  {
    id: 2,
    text: 'Staff',
    href: '#',
  },
  {
    id: 3,
    text: 'Students',
    href: '#',
  },
  {
    id: 4,
    text: 'Alumni',
    href: '#',
  },
];

const Footer = () => {
  return (
    <footer className='style-2'>
      <div className='footer-top dark-view padding-tb'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='footer-item our-address'>
                <div className='footer-inner'>
                  <div className='footer-content'>
                    <div className='title'>
                      <h4>{title}</h4>
                    </div>
                    <div className='content'>
                      <p>{desc}</p>
                      <ul className='lab-ul office-address'>
                        {addressList.map((address) => (
                          <li key={address.id}>
                            <i className={address.iconName}></i> {address.text}
                          </li>
                        ))}
                      </ul>
                      <ul className='lab-ul social-icons'>
                        {socialList.map((social) => (
                          <li key={social.id}>
                            <a
                              href={social.href}
                              className={social.className}
                              target={social.target}
                              data-tooltip-id={social.id}
                              data-tooltip-content={social.title}
                              data-tooltip-place='top'
                              title={social.title}
                            >
                              <i className={`mt-0 ${social.iconName}`}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='footer-item our-address'>
                <div className='footer-inner'>
                  <div className='footer-content'>
                    <div className='title'>
                      <h4>{quickTitle}</h4>
                    </div>
                    <div className='content'>
                      <p>{desc}</p>
                      <ul className='lab-ul office-address'>
                        {addressList.map((address) => (
                          <li key={address.id}>
                            <i className={address.iconName}></i> {address.text}
                          </li>
                        ))}
                      </ul>
                      <ul className='lab-ul social-icons'>
                        {socialList.map((social) => (
                          <li key={social.id}>
                            <a
                              href={social.href}
                              className={social.className}
                              target={social.target}
                              data-tooltip-id={social.id}
                              data-tooltip-content={social.title}
                              data-tooltip-place='top'
                              title={social.title}
                            >
                              <i className={`mt-0 ${social.iconName}`}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
