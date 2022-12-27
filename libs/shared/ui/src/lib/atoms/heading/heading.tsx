import { cva, VariantProps } from 'class-variance-authority';
import type { OverridableComponentProps } from '../../OverridableComponentProps';

const headingStyles = cva('font-sans font-extrabold tracking-tight', {
  variants: {
    size: {
      xs: 'text-xl sm:text-2xl lg:text-3xl',
      sm: 'text-2xl sm:text-3xl lg:text-4xl',
      md: 'text-3xl sm:text-4xl lg:text-5xl',
      lg: 'text-4xl sm:text-5xl lg:text-6xl',
      xl: 'text-5xl sm:text-6xl lg:text-7xl',
    },
    color: {
      primary: 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500',
      secondary: 'text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-500',
      light: 'text-white',
      dark: 'text-neutral-900',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'light',
  },
});

type ComponentProps = VariantProps<typeof headingStyles>;

export type HeadingProps<E extends React.ElementType = 'h2'> =
  OverridableComponentProps<ComponentProps, E>;

export function Heading<E extends React.ElementType = 'h2'>(
  props: HeadingProps<E>
) {
  const { as = 'h2', children = 'Lorem ipsum', ...passThroughProps } = props;
  const Element = as;

  return (
    <Element className={headingStyles(passThroughProps)} {...passThroughProps}>
      {children}
    </Element>
  );
}

export default Heading;
