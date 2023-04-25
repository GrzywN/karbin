import { Pacifico, Plus_Jakarta_Sans } from '@next/font/google';
import { AppProps } from 'next/app';
import Head from 'next/head';
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
        className={`${pacifico.variable} ${plusJakartaSans.variable} font-sans min-h-screen flex flex-col justify-between`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default Website;
