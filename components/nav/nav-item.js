import Link from 'next/link';

const NavItem = (props) => {
  const title = props.title;
  const route = props.route;
  const currentPage = props.currentPage;

  return (
    <li
      className={`mx-6 text-xl ${
        currentPage === route ? 'text-aqua font-semibold' : ''
      }`}
    >
      <Link href={route}>{title}</Link>
    </li>
  );
};
export default NavItem;
