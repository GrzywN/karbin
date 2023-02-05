import React from 'react';
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons';

import Text from '../../atoms/text/text';

export interface FooterProps {
  children?: React.ReactNode;
}

export function Footer(props: FooterProps) {
  const {
    children = (
      <>
        <Text color="light" size="xs">
          © {new Date().getFullYear()} Lorem Ipsum. All Rights Reserved.
        </Text>
        <SocialLinks />
      </>
    ),
  } = props;

  return (
    <footer className="mx-auto w-full mt-4 font-sans text-neutral-200 max-w-7xl py-4 sm:py-6">
      <div className="px-8 sm:flex sm:items-center sm:justify-between">
        {children}
      </div>
    </footer>
  );
}

export interface SocialLinksProps {
  children?: React.ReactNode;
}

function SocialLinks(props: SocialLinksProps) {
  const {
    children = (
      <>
        <SocialLink href="#" title="Twitter page">
          <IconBrandTwitter />
        </SocialLink>
        <SocialLink href="#" title="GitHub account">
          <IconBrandGithub />
        </SocialLink>
        <SocialLink href="#" title="LinkedIn account">
          <IconBrandLinkedin />
        </SocialLink>
      </>
    ),
  } = props;

  return (
    <ul className="flex flex-wrap mt-4 space-x-6 sm:justify-center bg-white rounded-full px-3 py-2 sm:mt-0 w-fit">
      {children}
    </ul>
  );
}

export interface SocialLinkProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

function SocialLink(props: SocialLinkProps) {
  const { href, title, children } = props;

  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="transition-colors text-neutral-900 hover:text-primary-900"
        rel="noopener noreferrer"
        title={title}
      >
        {children}
      </a>
    </li>
  );
}

Footer.SocialLinks = SocialLinks;
Footer.SocialLink = SocialLink;

export default Footer;
