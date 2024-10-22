import { useState } from 'react';

const reviwtitle = 'Add a Review';

const ReviewList = [
  {
    id: 1,
    imgUrl: '/src/assets/images/instructor/01.jpg',
    imgAlt: 'Client thumb',
    name: 'Ganelon Boileau',
    date: 'Posted on Jun 10, 2022 at 6:57 am',
    desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
  },
  {
    id: 2,
    imgUrl: '/src/assets/images/instructor/02.jpg',
    imgAlt: 'Client thumb',
    name: 'Morgana Cailot',
    date: 'Posted on Jun 10, 2022 at 6:57 am',
    desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
  },
  {
    id: 3,
    imgUrl: '/src/assets/images/instructor/03.jpg',
    imgAlt: 'Client thumb',
    name: 'Telford Bois',
    date: 'Posted on Jun 10, 2022 at 6:57 am',
    desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
  },
  {
    id: 4,
    imgUrl: '/src/assets/images/instructor/04.jpg',
    imgAlt: 'Client thumb',
    name: 'Cher Daviau',
    date: 'Posted on Jun 10, 2022 at 6:57 am',
    desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
  },
];

const Review = () => {
  const [reviweShow, setReviewShow] = useState(true);

  return (
    <div>
      <ul
        className={`review-nav lab-ul ${
          reviweShow ? 'RevActive' : 'DescActive'
        }`}
      >
        <li
          className='desc'
          onClick={() => setReviewShow(!reviweShow)}
          role='button'
        >
          Description
        </li>
        <li
          className='rev'
          onClick={() => setReviewShow(!reviweShow)}
          role='button'
        >
          Review 4
        </li>
      </ul>
    </div>
  );
};

export default Review;
