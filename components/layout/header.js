import Link from 'next/link';
import { useRouter } from 'next/router';

import { Fragment } from 'react';
import { useState } from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';

import NavItem from '../nav/nav-item';
import NavIcon from '../nav/nav-icon';

const Header = () => {
  const [closeIconVisible, setCloseIconVisible] = useState(false);

  const router = useRouter();
  const currentPage = router.pathname;
  const selectedStyle = 'text-aqua font-semibold';

  const routeToHome = () => {
    router.push('/');
  };

  const mobileNavClickHandler = () => {
    setCloseIconVisible(false);
  };

  const allNavItems = (
    <ul
      className='mx-auto flex flex-col content-center lg:flex-row'
      onClick={mobileNavClickHandler}
    >
      <NavItem title={'Home'} route={'/'} currentPage={currentPage} />
      <NavItem title={'About'} route={'/about'} currentPage={currentPage} />
      <NavItem title={'Skills'} route={'/skills'} currentPage={currentPage} />
      <NavItem
        title={'Projects'}
        route={'/projects'}
        currentPage={currentPage}
      />
      <NavItem
        title={'Resume'}
        currentPage={currentPage}
        isResume={true}
        onClick={routeToHome}
      />
      <NavItem
        title={'Email'}
        currentPage={currentPage}
        isEmail={true}
        onClick={routeToHome}
      />
      <div className='flex flex-col items-center lg:flex lg:flex-row'>
        <NavIcon
          link={'https://www.linkedin.com/in/tandeepgill/'}
          icon={<FaLinkedin />}
          margin={'lg:ml-16'}
        />
        <NavIcon
          link={'https://github.com/TandeepGill'}
          icon={<FaGithub />}
          margin={'lg:mx-3'}
        />
      </div>
    </ul>
  );

  return (
    <Fragment>
      <header className='sticky top-0 flex h-16 justify-end bg-black text-white lg:justify-center'>
        {!closeIconVisible ? (
          <div>
            <FiMenu
              className='hover:text-aqua z-10 mr-5 h-full justify-end text-3xl hover:cursor-pointer lg:hidden'
              onClick={() => setCloseIconVisible(true)}
            />
          </div>
        ) : (
          <div>
            <CgClose
              className='hover:text-aqua z-10 mr-5 h-full justify-end text-3xl hover:cursor-pointer lg:hidden'
              onClick={() => setCloseIconVisible(false)}
            />
          </div>
        )}

        {!closeIconVisible && (
          <nav className='hidden h-full items-center justify-center lg:flex'>
            {allNavItems}
          </nav>
        )}
      </header>

      {closeIconVisible && (
        <div className='absolute flex h-full w-full flex-col items-center justify-center bg-black py-2 text-white'>
          <div className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
            <nav className='mt-10 flex h-full w-full items-start justify-center lg:hidden lg:items-center'>
              {allNavItems}
            </nav>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
