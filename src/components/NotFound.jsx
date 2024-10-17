import notfound from '@/assets/images/errors/notfound.svg';

const NotFound = () => {
  return (
    <>
      <div className='d-flex flex-column gap-4 align-items-center justify-content-center'>
        <figure className='notfoundthumb'>
          <img src={notfound} alt='not-found' />
        </figure>

        <button type='button' className='btn btn-primary fw-bold py-3 px-4'>
          Back to Home
        </button>
      </div>
    </>
  );
};

export default NotFound;
