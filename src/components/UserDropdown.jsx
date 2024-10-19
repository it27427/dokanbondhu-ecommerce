import { Link } from 'react-router-dom';

const UserDropdown = () => {
  return (
    <>
      <div className='dropdown'>
        <button
          className='btn btn-bg-primary-subtle dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <i className='icofont-duotone icofont-ui-user'></i>
        </button>
        <ul className='dropdown-menu'>
          <li>
            <Link to='/sign-up' className='lab-btn'>
              <span>Create Account</span>
            </Link>
          </li>
          <li>
            <Link to='/sign-in' className='dropdown-item'>
              <span>Sign In</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserDropdown;
