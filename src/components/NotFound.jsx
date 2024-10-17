import notfound from '@/assets/images/errors/notfound.svg';

const NotFound = () => {
  return (
    <>
      <div className='flexcentercol'>
        <figure className='notfoundthumb'>
          <img src={notfound} alt='not-found' />
        </figure>

        <button type='button' className='btn-primary'>
          Back to Home
        </button>
      </div>
    </>
  );
};

export default NotFound;
