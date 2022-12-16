import { useCallback } from 'react';
import { useRouter } from 'next/router';

import type { ReactNode, MouseEvent, MouseEventHandler } from 'react';

import { Text } from '../text/text';

export interface NavLinkProps {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children?: ReactNode;
}

export function NavLink(props: NavLinkProps) {
  const { href, children = 'Lorem ipsum', onClick } = props;

  return (
    <Text as="a" href={href} size="sm" link="true" onClick={onClick}>
      {children}
    </Text>
  );
}

export type NavLinkWithNextRoutingProps = Omit<NavLinkProps, 'onClick'>;

export function NavLinkWithNextRouting(props: NavLinkWithNextRoutingProps) {
  const { href, ...passThroughProps } = props;

  const router = useRouter();

  const handleClick = useCallback<MouseEventHandler>(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.nativeEvent.preventDefault();

      router.push(href);
    },
    [router, href]
  );

  return <NavLink onClick={handleClick} href={href} {...passThroughProps} />;
}

export default NavLink;
