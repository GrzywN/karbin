import {
  Button,
  Container,
  Footer,
  LanguageSwitcher,
  Logo,
  Navbar,
  NavLink,
  NavLinkWithNextRouting,
  Text,
} from '@karbin/shared/ui';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import Seo from '../seo/seo';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props;

  const router = useRouter();
  const { locale = 'en', pathname, asPath, query } = router;
  const nextLocale = locale === 'en' ? 'pl' : 'en';

  const isEnglish = locale === 'en';

  const about = isEnglish ? 'About' : 'O mnie';
  const work = isEnglish ? 'Work' : 'Projekty';
  const articles = isEnglish ? 'Articles' : 'Artykuły';
  const resume = isEnglish ? 'Resume' : 'CV';
  const switchLanguageHint = isEnglish ? 'Polski' : 'English';
  const contactMe = isEnglish ? 'Contact me' : 'Skontaktuj się ze mną';
  const twitterPageTitle = isEnglish ? 'Twitter page' : 'Strona na Twitterze';
  const githubAccountTitle = isEnglish ? 'GitHub account' : 'Konto na GitHubie';
  const linkedInPageTitle = isEnglish
    ? 'LinkedIn account'
    : 'Strona na LinkedIn';

  const handleLanguageChange = useCallback(() => {
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  }, [router, asPath, pathname, query, nextLocale]);

  if (locale !== 'en' && locale !== 'pl') {
    return null;
  }

  return (
    <>
      <Seo />
      <Navbar>
        <Link href="/">
          <Logo as="span" link />
        </Link>
        <Navbar.Nav>
          <NavLinkWithNextRouting href="/about" name={about} />
          <NavLinkWithNextRouting href="/work" name={work} />
          <NavLinkWithNextRouting href="/articles" name={articles} />
          <NavLink href="/CV-Karol-Binkowski.pdf" name={resume} />
          <Button
            as="a"
            href="mailto:karolbinkowski3@proton.me"
            color="tertiary"
          >
            {contactMe}
            <IconMail />
          </Button>
          <div className="-ml-6">
            <LanguageSwitcher
              as="button"
              ariaLabel={switchLanguageHint}
              onClick={handleLanguageChange}
              locale={locale}
            />
          </div>
        </Navbar.Nav>
      </Navbar>
      <Container>{children}</Container>
      <Footer>
        <Text color="light" size="xs">
          © {new Date().getFullYear()} Karol Binkowski. All Rights Reserved.
        </Text>
        <Footer.SocialLinks>
          <Footer.SocialLink
            href="https://twitter.com/grzywn"
            title={twitterPageTitle}
          >
            <IconBrandTwitter />
          </Footer.SocialLink>
          <Footer.SocialLink
            href="https://github.com/GrzywN"
            title={githubAccountTitle}
          >
            <IconBrandGithub />
          </Footer.SocialLink>
          <Footer.SocialLink
            href="https://www.linkedin.com/in/karol-binkowski-113a13211/"
            title={linkedInPageTitle}
          >
            <IconBrandLinkedin />
          </Footer.SocialLink>
        </Footer.SocialLinks>
      </Footer>
      <div id="portal" />
    </>
  );
}

export default Layout;
