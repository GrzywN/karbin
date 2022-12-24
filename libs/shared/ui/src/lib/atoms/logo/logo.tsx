import { cva, VariantProps } from 'class-variance-authority';
import type { OverridableComponentProps } from '../../OverridableComponentProps';

const logoStyles = cva(['font-cursive', 'text-2xl', 'md:text-3xl'], {
  variants: {
    color: {
      dark: 'text-neutral-900',
      light: 'text-neutral-100',
    },
  },
  defaultVariants: {
    color: 'light',
  },
});

type ComponentProps = VariantProps<typeof logoStyles>;

export type LogoProps<E extends React.ElementType = 'p'> =
  OverridableComponentProps<ComponentProps, E>;

export function Logo<E extends React.ElementType = 'h2'>(props: LogoProps<E>) {
  const { as = 'h2', ...passThroughProps } = props;
  const Element = as;

  return (
    <Element className={logoStyles(passThroughProps)}>Karol Binkowski</Element>
  );
}

export default Logo;
