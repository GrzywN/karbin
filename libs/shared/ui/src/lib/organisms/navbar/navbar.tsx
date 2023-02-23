import { Twirl as Hamburger } from 'hamburger-react';
import React, { useContext, useEffect, useState } from 'react';

import Logo from '../../atoms/logo/logo';
import NavLink from '../../atoms/nav-link/nav-link';

export interface NavbarContextType {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarContext = React.createContext<NavbarContextType | null>(null);

export interface NavbarProps {
  children: React.ReactNode;
}

export function Navbar(props: NavbarProps) {
  const { children } = props;

  const [opened, setOpened] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    let prevScrollOffset = 0;
    let currScrollOffset = 0;

    window.addEventListener('scroll', () => {
      currScrollOffset = window.pageYOffset;

      if (prevScrollOffset - currScrollOffset < 0) {
        setVisible(false);
      } else if (prevScrollOffset - currScrollOffset > 0) {
        setVisible(true);
      }

      prevScrollOffset = currScrollOffset;
    });
  }, []);

  return (
    <NavbarContext.Provider value={{ opened, setOpened }}>
      <header
        className={`
        ${visible ? 'lg:opacity-100' : 'lg:-translate-y-full lg:opacity-0'}
        z-50 fixed transition duration-500 top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl flex items-center justify-between p-4 h-20 bg-neutral-600
        lg:px-8 lg:py-16 lg:bg-transparent`}
      >
        {children ? (
          children
        ) : (
          <>
            <Logo />
            <Nav />
          </>
        )}
      </header>
    </NavbarContext.Provider>
  );
}

export interface NavProps {
  children?: React.ReactNode;
}

function Nav(props: NavProps) {
  const { children = null } = props;
  const { opened, setOpened } = useContext(NavbarContext) as NavbarContextType;

  const handleMenuClose = () => setOpened(false);

  return (
    <nav className="flex items-center">
      <div className="lg:hidden">
        <Hamburger
          toggled={opened}
          toggle={setOpened}
          aria-expanded={opened}
          duration={0.5}
          color={'white'}
          rounded
          label={'Menu'}
        />
      </div>

      <ul
        className={`
        ${opened ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 invisible'}
        grid transition-all duration-500 origin-top absolute inset-x-0 bottom-0 translate-y-full place-items-center space-y-4 py-8 px-4 bg-neutral-700
        lg:static lg:transform-none lg:opacity-100 lg:visible lg:flex lg:space-y-0 lg:space-x-8 lg:bg-transparent`}
      >
        {children ? (
          React.Children.map(children, (child) => (
            <li onClick={handleMenuClose}>{child}</li>
          ))
        ) : (
          <>
            <li onClick={handleMenuClose}>
              <NavLink href="#" />
            </li>
            <li onClick={handleMenuClose}>
              <NavLink href="#" />
            </li>
            <li onClick={handleMenuClose}>
              <NavLink href="#" />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

Navbar.Nav = Nav;

export default Navbar;
