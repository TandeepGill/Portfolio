import Link from 'next/link';
import { useRouter } from 'next/router';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import NavItem from '../nav/nav-item';
import NavIcon from '../nav/nav-icon';

const Header = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  const selectedStyle = 'text-aqua font-semibold';

  return (
    <header className='h-16 bg-black text-white'>
      <nav className='flex h-full items-center justify-center '>
        <ul className='mx-auto flex content-center'>
          <NavItem title={'Home'} route={'/'} currentPage={currentPage} />
          <NavItem title={'About'} route={'/about'} currentPage={currentPage} />
          <NavItem
            title={'Skills'}
            route={'/skills'}
            currentPage={currentPage}
          />
          <NavItem
            title={'Projects'}
            route={'/projects'}
            currentPage={currentPage}
          />
          <NavItem
            title={'Experience'}
            route={'/experience'}
            currentPage={currentPage}
          />
          <NavItem
            title={'Resume'}
            route={'/resume'}
            currentPage={currentPage}
          />
          <NavItem
            title={'Contact'}
            route={'/contact'}
            currentPage={currentPage}
          />
          <NavIcon
            link={'https://www.linkedin.com/in/tandeepgill/'}
            icon={<FaLinkedin />}
            margin={'ml-16'}
          />
          <NavIcon
            link={'https://github.com/TandeepGill'}
            icon={<FaGithub />}
            margin={'mx-2'}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
