import { Link } from 'react-router-dom';

const SignUpMenu = () => {
  return (
    <>
      <div className='d-flex align-items-center gap-3'>
        <Link to='/sign-up' className='lab-btn'>
          <span>Create Account</span>
        </Link>

        <Link to='/sign-in'>
          <span>Sign In</span>
        </Link>
      </div>
    </>
  );
};

export default SignUpMenu;
