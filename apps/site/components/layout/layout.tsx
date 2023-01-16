import {
  IconMail,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons';
import {
  Navbar,
  Logo,
  NavLinkWithNextRouting,
  Button,
  Footer,
  Text,
} from '@karbin/shared/ui';

import { Container } from '@karbin/shared/ui';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Navbar>
        <Logo />
        <Navbar.Nav>
          <NavLinkWithNextRouting href="/" name="Work" />
          <NavLinkWithNextRouting href="/" name="About me" />
          <NavLinkWithNextRouting href="/" name="Resume" />
          <Button color="tertiary">
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
          <Footer.SocialLink href="#" title="Twitter page">
            <IconBrandTwitter />
          </Footer.SocialLink>
          <Footer.SocialLink href="#" title="GitHub account">
            <IconBrandGithub />
          </Footer.SocialLink>
          <Footer.SocialLink href="#" title="LinkedIn account">
            <IconBrandLinkedin />
          </Footer.SocialLink>
        </Footer.SocialLinks>
      </Footer>
    </>
  );
}

export default Layout;
