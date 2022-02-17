const NavIcon = (props) => {
  const link = props.link;
  const icon = props.icon;
  const margin = props.margin;

  return (
    <li className={`${margin} hover:text-aqua text-3xl`}>
      <a href={props.link} target='_blank' rel='noreferrer noopener'>
        {icon}
      </a>
    </li>
  );
};

export default NavIcon;
