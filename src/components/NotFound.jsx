import { Link } from 'react-router-dom';
import notfound from '@/assets/images/errors/notfound.svg';

const NotFound = () => {
  return (
    <>
      <div className='d-flex flex-column gap-4 align-items-center justify-content-center'>
        <figure className='notfoundthumb'>
          <img src={notfound} alt='not-found' />
        </figure>

        <Link to='/' className='btn btn-primary text-white fw-bold px-4'>
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
