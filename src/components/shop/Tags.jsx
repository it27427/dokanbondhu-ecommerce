const title = 'Our Popular Tags';

const tagsList = [
  {
    id: 1,
    href: '#',
    text: 'envato',
  },
  {
    id: 2,
    href: '#',
    text: 'themeforest',
  },
  {
    id: 3,
    href: '#',
    text: 'codecanyon',
  },
  {
    id: 4,
    href: '#',
    text: 'videohive',
  },
  {
    id: 5,
    href: '#',
    text: 'audiojungle',
  },
  {
    id: 6,
    href: '#',
    text: '3docean',
  },
  {
    id: 7,
    href: '#',
    text: 'envato',
  },
  {
    id: 8,
    href: '#',
    text: 'themeforest',
  },
  {
    id: 9,
    href: '#',
    text: 'codecanyon',
  },
];

const Tags = () => {
  return (
    <div className='widget widget-tags'>
      <div className='widget-header'>
        <h5 className='title'>{title}</h5>
      </div>
      <ul className='widget-wrapper'>
        {tagsList.map((tag) => (
          <li key={tag.id}>
            <a href={tag.href}>{tag.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
