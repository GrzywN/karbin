import { AppProps } from 'next/app';
import Head from 'next/head';
import { Navbar, Logo, NavLinkWithNextRouting } from '@karbin/shared/ui';
import { Pacifico, Plus_Jakarta_Sans } from '@next/font/google';

import './styles.css';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-pacifico',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-plus-jakarta-sans',
});

function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Karol Binkowski | Front-end developer</title>
      </Head>
      <div
        className={`${pacifico.variable} ${plusJakartaSans.variable} font-sans`}
      >
        <Navbar>
          <Logo />
          <Navbar.Nav>
            <NavLinkWithNextRouting href="/work" name="Work" />
            <NavLinkWithNextRouting href="/about" name="About me" />
            <NavLinkWithNextRouting href="/resume" name="Resume" />
            <NavLinkWithNextRouting href="/contact" name="Contact" />
          </Navbar.Nav>
        </Navbar>
        <main className="max-w-7xl w-full mx-auto py-28 px-8 grid gap-16">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default Website;
