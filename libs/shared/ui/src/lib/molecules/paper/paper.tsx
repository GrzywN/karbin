import { cva, VariantProps } from 'class-variance-authority';
import { filterVariants, getVariantNames } from '../../utils/filter-variants';

import type { OverridableComponentProps } from '../../OverridableComponentProps';

const paperDefaultClasses = 'rounded-lg shadow-lg';
const paperVariants = {
  variants: {
    color: {
      primary: 'bg-primary-400 text-neutral-900',
      secondary: 'bg-secondary-400 text-neutral-900',
      tertiary: 'bg-tertiary-400 text-neutral-900',
      light: 'bg-neutral-100 text-neutral-900',
      dark: 'bg-neutral-900 text-white',
      success: 'bg-success-400 text-neutral-900',
      warning: 'bg-warning-400 text-neutral-900',
      danger: 'bg-danger-400 text-neutral-900',
    },
    hasBorder: {
      true: 'border-2 border-r-4 border-b-4 border-black',
    },
    hasPadding: {
      true: 'p-4',
    },
  },
  defaultVariants: {
    color: 'light' as const,
    hasBorder: true,
  },
};

const paperStyles = cva(paperDefaultClasses, paperVariants);

interface ComponentProps extends VariantProps<typeof paperStyles> {
  className?: string;
  children?: React.ReactNode;
}

export type PaperProps<E extends React.ElementType = 'div'> =
  OverridableComponentProps<ComponentProps, E>;

export function Paper<E extends React.ElementType = 'div'>(
  props: PaperProps<E>
) {
  const {
    as = 'div',
    className = '',
    children = 'Lorem ipsum',
    ...passThroughProps
  } = props;
  const Element = as;

  const variantNames = getVariantNames(paperVariants);
  const { variantProps, elementProps } = filterVariants(
    variantNames,
    passThroughProps
  );

  return (
    <Element
      className={`${paperStyles(variantProps)} ${className}`}
      {...elementProps}
    >
      {children}
    </Element>
  );
}

export default Paper;
