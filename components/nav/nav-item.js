import Link from 'next/link';

const NavItem = (props) => {
  const title = props.title;
  const route = props.route;
  const currentPage = props.currentPage;
  const email = props.isEmail;
  const resume = props.isResume;

  return (
    <li
      className={`mx-6 text-xl ${
        currentPage === route ? 'text-aqua font-semibold' : ''
      }`}
    >
      {email && (
        <a
          href='mailto:gill.tandeep@gmail.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          {title}
        </a>
      )}
      {resume && (
        <a
          href='TandeepGill_Resume.pdf'
          target='_blank'
          rel='noreferrer noopener'
        >
          {title}
        </a>
      )}

      {!email && !resume ? <Link href={route}>{title}</Link> : null}
    </li>
  );
};
export default NavItem;
