import { useCallback } from 'react';
import { useRouter } from 'next/router';

import type { MouseEvent, MouseEventHandler } from 'react';

import { Text } from '../text/text';

export interface NavLinkProps {
  name?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function NavLink(props: NavLinkProps) {
  const { name = 'Lorem ipsum', href = '#', onClick } = props;

  return (
    <Text as="a" href={href} size="sm" color="gray" link onClick={onClick}>
      {name}
    </Text>
  );
}

export type NavLinkWithNextRoutingProps = { href: string } & Omit<
  NavLinkProps,
  'onClick'
>;

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
