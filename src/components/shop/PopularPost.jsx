import { Link } from 'react-router-dom';

const title = 'Most Popular Post';
const postList = [
  {
    id: 1,
    imgUrl: '/src/assets/images/blog/10.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor People Campaign Our Resources',
    date: 'Jun 05,2022',
  },
  {
    id: 2,
    imgUrl: '/src/assets/images/blog/11.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
  },
  {
    id: 3,
    imgUrl: '/src/assets/images/blog/12.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
  },
  {
    id: 4,
    imgUrl: '/src/assets/images/blog/09.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
  },
];

const PopularPost = () => {
  return (
    <div className='widget widget-post'>
      <div className='widget-header'>
        <h5 className='title'>{title}</h5>
      </div>

      <ul className='widget-wrapper'>
        {postList.map((post) => (
          <li
            key={post.id}
            className='d-flex flex-wrap justify-content-between'
          >
            <figure className='post-thumb'>
              <Link to={`/shop/${post.id}`}>
                <img src={post.imgUrl} alt={post.imgAlt} />
              </Link>
            </figure>
            <div className='post-content'>
              <Link to={`/shop/${post.id}`}>
                <h5>{post.title}</h5>
                <p>{post.date}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPost;
