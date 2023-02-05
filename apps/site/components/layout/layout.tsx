import {
  IconMail,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons';
import {
  Navbar,
  Logo,
  NavLink,
  NavLinkWithNextRouting,
  Button,
  Footer,
  Text,
  Container,
} from '@karbin/shared/ui';
import Link from 'next/link';

import Seo from '../seo/seo';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Seo />
      <Navbar>
        <Link href="/">
          <Logo as="span" link />
        </Link>
        <Navbar.Nav>
          <NavLinkWithNextRouting href="/about" name="About" />
          <NavLinkWithNextRouting href="/work" name="Work" />
          <NavLinkWithNextRouting href="/articles" name="Articles" />
          <NavLink href="/Resume-Karol-Binkowski.pdf" name="Resume" />
          <Button
            as="a"
            href="mailto:karolbinkowski3@proton.me"
            color="tertiary"
          >
            Contact me
            <IconMail />
          </Button>
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
            title="Twitter page"
          >
            <IconBrandTwitter />
          </Footer.SocialLink>
          <Footer.SocialLink
            href="https://github.com/GrzywN"
            title="GitHub account"
          >
            <IconBrandGithub />
          </Footer.SocialLink>
          <Footer.SocialLink
            href="https://www.linkedin.com/in/karol-binkowski-113a13211/"
            title="LinkedIn account"
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
