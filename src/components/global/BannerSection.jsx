import { Link } from 'react-router-dom';

const BannerSection = ({ title, currentPage }) => {
  return (
    <section className='pageheader-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='pageheader-content text-center'>
              <h2 className='title'>{title}</h2>

              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb justify-content-center m-0'>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    {currentPage}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
