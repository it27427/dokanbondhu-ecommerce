import { useState } from 'react';

const subTitle = 'Save The Day';
const title = (
  <h2 className='title'>
    Join on Day Long Free Workshop for{' '}
    <strong>
      Advance <span>Mastering</span>
    </strong>{' '}
    on Sales
  </h2>
);
const description = 'Limited Time Offer';

const HomeRegister = () => {
  return (
    <section className='register-section padding-tb pb-0'>
      <div className='container'>
        <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
          <div className='col'>
            <div className='section-header'>
              <h4 className='subtitle'>{subTitle}</h4>

              {title}

              <p className='pt-3'>{description}</p>
            </div>
          </div>

          <div className='col'>
            <div className='section-wrapper'>
              <h4>Register Now</h4>
              <form className='register-form'>
                <input
                  type='text'
                  name='name'
                  placeholder='Username'
                  className='reg-input'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='E-mail'
                  className='reg-input'
                />
                <input
                  type='tel'
                  name='phone'
                  placeholder='Phone'
                  className='reg-input'
                />

                <button type='submit' className='lab-btn mt-2'>
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRegister;
