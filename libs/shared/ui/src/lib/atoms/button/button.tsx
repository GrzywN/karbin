import { useMemo } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { filterVariants } from '../../utils/filter-variants';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';

import type { OverridableComponentProps } from '../../OverridableComponentProps';

const buttonDefaultClasses = `
  relative font-sans inline-flex items-center gap-2 font-medium tracking-wide
  focus-within:outline outline-2 outline-offset-2`;

const buttonVariants = {
  variants: {
    color: {
      primary: 'bg-primary-400 text-neutral-900 outline-primary-400',
      secondary: 'bg-secondary-400 text-neutral-900 outline-secondary-400',
      light: 'bg-neutral-200 text-neutral-900 outline-neutral-900',
      dark: 'bg-neutral-700 text-white outline-neutral-700',
    },
    activeEffect: {
      opacity: 'transition-opacity hover:opacity-90 focus-visible:opacity-90',
      scale: 'transition-transform hover:scale-110 focus-visible:scale-110',
      none: '',
    },
    isFullWidth: {
      true: 'w-full',
    },
    isCircle: {
      true: 'rounded-full',
      false: 'rounded-md py-2 px-4',
    },
    isLoading: {
      true: 'cursor-default opacity-75',
      false: 'cursor-pointer active:translate-y-0.5',
    },
    hasBorder: {
      true: 'border border-2 border-black',
    },
  },
  defaultVariants: {
    color: 'primary',
    activeEffect: 'opacity',
    isCircle: false,
    isLoading: false,
    hasBorder: true,
  },
};

const buttonStyles = cva(buttonDefaultClasses, buttonVariants);

type ComponentProps = VariantProps<typeof buttonStyles>;

export type ButtonProps<E extends React.ElementType = 'button'> =
  OverridableComponentProps<ComponentProps, E>;

export function Button<E extends React.ElementType = 'button'>(
  props: ButtonProps<E>
) {
  const {
    as = 'button',
    children = 'Lorem ipsum',
    ...passThroughProps
  } = props;
  const Element = as;

  const variantNames = Object.keys(buttonVariants.variants);
  const { variantProps, elementProps } = filterVariants(
    variantNames,
    passThroughProps
  );

  const { isLoading } = passThroughProps;
  const onLoadingProps = useMemo(() => {
    return { 'aria-disabled': true, 'aria-busy': true, tabIndex: -1 };
  }, []);

  return (
    <Element
      className={buttonStyles(variantProps)}
      tabIndex={0}
      {...(isLoading ? onLoadingProps : null)}
      {...elementProps}
    >
      {isLoading ? <LoadingSpinner>{children}</LoadingSpinner> : children}
    </Element>
  );
}

export default Button;
