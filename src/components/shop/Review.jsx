import { useState } from 'react';
import Rating from '@/components/home/Rating';

const reviwtitle = 'Add a Review';

const ReviewList = [
  {
    id: 1,
    imgUrl: '/src/assets/images/instructor/01.jpg',
    imgAlt: 'Client thumb',
    name: 'Ganelon Boileau',
    date: 'Posted on Oct 20, 2024 at 6:57 am',
    desc: 'Fit prefect I love these very much I would buy it again exactly what is on the picture I recommend anyone who want neat and nice on my foot',
  },
  {
    id: 2,
    imgUrl: '/src/assets/images/instructor/02.jpg',
    imgAlt: 'Client thumb',
    name: 'Morgana Cailot',
    date: 'Posted on Oct 21, 2024 at 7:50 pm',
    desc: 'I caught these during a flash sales. Im flat footed and they are very comfortable shoes. Took a few days to wear in. Now they fit really good. I walk a lot in them and they feel good.',
  },
  {
    id: 3,
    imgUrl: '/src/assets/images/instructor/03.jpg',
    imgAlt: 'Client thumb',
    name: 'Telford Bois',
    date: 'Posted on Oct 22, 2024 at 3:57 pm',
    desc: 'Been wearing these for years and it’s a staple. Super cheap during prime day but even at full price definitely worth it. Goes with everything. Could run a tiny bit tight so I’ll just be wearing think ankle socks which is fine. They will wear in later.',
  },
  {
    id: 4,
    imgUrl: '/src/assets/images/instructor/04.jpg',
    imgAlt: 'Client thumb',
    name: 'Cher Daviau',
    date: 'Posted on Oct 23, 2024 at 1:38 am',
    desc: 'I’ve been wanting a vintage looking pair of tennis shoes for a while now but have had a hard time finding the right ones. Well these are them! They are wide enough not to pinch the nerves in my foot. And I can wear them all day with no issues. Any given day I’m at my desk, climbing stairs (instead of the elevator), loading an suv or trailer, standing/walking all day and they are comfortable for it all! They also happen to match my work scrubs perfectly! (I wear blue scrub pants and a t shirt, one of which is grey with large white logo) I’ve gotten several compliments on them and I haven’t even had them long! So glad I gave them a shot!',
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

      {/* DESCRIPTION & REVIEW CONTENT */}
      <div
        className={`review-content ${
          reviweShow ? 'review-content-show' : 'description-show'
        }`}
      >
        {/* REVIEW-SHOWING */}
        <div className='review-showing'>
          <ul className='content lab-ul'>
            {ReviewList.map((review) => (
              <li key={review.id}>
                <figure className='post-thumb'>
                  <img src={review.imgUrl} alt={review.imgAlt} />
                </figure>
                <div className='post-content'>
                  <div className='entry-meta'>
                    <a href='#'>{review.name}</a>
                    <p>
                      <time>{review.date}</time>
                    </p>
                  </div>
                  <div className='entry-content'>
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* ADD-REVIEW */}
          <div className='client-review'>
            <div className='review-form'>
              <div className='review-title'>
                <h5>{reviwtitle}</h5>
              </div>

              <form action='action' className='row'>
                <div className='col-md-4 col-12'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Full name *'
                  />
                </div>
                <div className='col-md-4 col-12'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='E-mail address *'
                  />
                </div>
                <div className='col-md-4 col-12'>
                  <div className='rating'>
                    <span className='me-2'>Your Rating</span>
                    <Rating />
                  </div>
                </div>
                <div className='col-12'>
                  <textarea
                    name='message'
                    id='message'
                    rows={8}
                    placeholder='Enter Message'
                  ></textarea>
                </div>

                <div className='col-12 mt-3'>
                  <button type='submit' className='default-button'>
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* DESCRIPTION-SHOWING */}
        <div className='description'>
          <p>
            Customers like the comfort, style, and quality of the shoes. They
            mention that they're super comfortable, support their ankles, and
            have good arch support. Some say the price is reasonable. However,
            some dislike the stiffness and have different opinions on the fit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
