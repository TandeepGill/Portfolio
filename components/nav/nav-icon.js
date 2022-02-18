const NavIcon = (props) => {
  const link = props.link;
  const icon = props.icon;
  const margin = props.margin;

  return (
    <li className={`${margin} hover:text-aqua my-4 flex text-3xl lg:my-auto`}>
      <a
        className='justify-evenly'
        href={props.link}
        target='_blank'
        rel='noreferrer noopener'
      >
        {icon}
      </a>
    </li>
  );
};

export default NavIcon;
