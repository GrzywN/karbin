import { cva, VariantProps } from 'class-variance-authority';
import type { OverridableComponentProps } from '../../OverridableComponentProps';

const textStyles = cva('font-sans', {
  variants: {
    size: {
      xs: 'text-xs sm:text-base lg:text-lg',
      sm: 'text-sm sm:text-lg lg:text-xl',
      md: 'text-base sm:text-xl lg:text-2xl',
      lg: 'text-lg sm:text-2xl lg:text-3xl',
      xl: 'text-xl sm:text-3xl lg:text-4xl',
    },
    color: {
      light: 'text-white',
      dark: 'text-neutral-900',
      gray: 'text-neutral-400',
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    link: {
      true: 'cursor-pointer transition-colors hover:text-white focus-visible:text-white',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'gray',
    weight: 'normal',
  },
});

type ComponentProps = VariantProps<typeof textStyles>;

export type TextProps<E extends React.ElementType = 'p'> =
  OverridableComponentProps<ComponentProps, E>;

export function Text<E extends React.ElementType = 'p'>(props: TextProps<E>) {
  const { as = 'p', children = 'Lorem ipsum', ...passThroughProps } = props;
  const Element = as;

  return (
    <Element className={textStyles(passThroughProps)} {...passThroughProps}>
      {children}
    </Element>
  );
}

export default Text;
