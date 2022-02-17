import Link from 'next/link';

const NavItem = (props) => {
  const title = props.title;
  const route = props.route;
  const currentPage = props.currentPage;
  const isEmail = props.isEmail;
  const isResume = props.isResume;
  const routeToHome = props.onClick;

  return (
    <li
      className={`hover:text-aqua mx-6 text-xl ${
        currentPage === route ? 'text-aqua border-b-2 font-semibold' : ''
      }`}
    >
      {isEmail && (
        <a
          href='mailto:gill.tandeep@gmail.com'
          target='_blank'
          rel='noreferrer noopener'
          onClick={routeToHome}
        >
          {title}
        </a>
      )}
      {isResume && (
        <a
          href='TandeepGill_Resume.pdf'
          target='_blank'
          rel='noreferrer noopener'
          onClick={routeToHome}
        >
          {title}
        </a>
      )}

      {!isEmail && !isResume ? <Link href={route}>{title}</Link> : null}
    </li>
  );
};
export default NavItem;
