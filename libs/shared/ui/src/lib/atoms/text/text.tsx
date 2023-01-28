import { cva, VariantProps } from 'class-variance-authority';
import { getVariantNames, filterVariants } from '../../utils/filter-variants';
import type { OverridableComponentProps } from '../../OverridableComponentProps';

const textDefaultClasses = 'font-sans not-italic';
const textVariants = {
  variants: {
    size: {
      xs: 'text-xs sm:text-base lg:text-lg',
      sm: 'text-sm sm:text-lg lg:text-xl',
      md: 'text-base sm:text-xl lg:text-2xl',
      lg: 'text-lg sm:text-2xl lg:text-3xl',
      xl: 'text-xl sm:text-3xl lg:text-4xl',
    },
    color: {
      current: 'text-current',
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
      true: 'cursor-pointer transition-colors',
    },
  },
  compoundVariants: [
    {
      color: 'light' as const,
      link: true,
      className: 'hover:text-neutral-300 focus-visible:text-neutral-300',
    },
    {
      color: 'dark' as const,
      link: true,
      className: 'hover:text-neutral-700 focus-visible:text-neutral-700',
    },
    {
      color: 'gray' as const,
      link: true,
      className: 'hover:text-white focus-visible:text-white',
    },
  ],
  defaultVariants: {
    size: 'md' as const,
    color: 'current' as const,
    weight: 'normal' as const,
  },
};

const textStyles = cva(textDefaultClasses, textVariants);

type ComponentProps = VariantProps<typeof textStyles>;

export type TextProps<E extends React.ElementType = 'p'> =
  OverridableComponentProps<ComponentProps, E>;

export function Text<E extends React.ElementType = 'p'>(props: TextProps<E>) {
  const { as = 'p', children = 'Lorem ipsum', ...passThroughProps } = props;
  const Element = as;

  const variantNames = getVariantNames(textVariants);
  const { variantProps, elementProps } = filterVariants(
    variantNames,
    passThroughProps
  );

  return (
    <Element className={textStyles(variantProps)} {...elementProps}>
      {children}
    </Element>
  );
}

export default Text;
