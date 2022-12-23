import { useMemo } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import type { OverridableComponentProps } from '../../OverridableComponentProps';

const buttonStyles = cva(
  'cursor-pointer font-sans inline-flex items-center gap-2 py-2 px-4 font-medium tracking-wide',
  {
    variants: {
      color: {
        primary: 'bg-primary-400 text-neutral-900',
        secondary: 'bg-secondary-400 text-neutral-900',
        light: 'bg-white text-neutral-900',
        dark: 'bg-neutral-800 text-white',
      },
      activeEffect: {
        opacity: 'transition-opacity hover:opacity-90 focus-visible:opacity-90',
        scale: 'transition-transform hover:scale-110 focus-visible:scale-110',
      },
      rounded: {
        true: 'rounded-md',
      },
      border: {
        true: 'border border-2 border-black',
      },
      loading: {
        true: 'relative',
        false: 'active:translate-y-0.5',
      },
    },
    defaultVariants: {
      color: 'primary',
      activeEffect: 'opacity',
      rounded: true,
      border: true,
      loading: false,
    },
  }
);

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

  const { loading } = passThroughProps;

  const onLoadingProps = useMemo(() => {
    return { 'aria-disabled': true, 'aria-busy': true, tabIndex: -1 };
  }, []);

  return (
    <Element
      className={buttonStyles(passThroughProps)}
      {...onLoadingProps}
      {...passThroughProps}
    >
      {loading ? (
        <>
          <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
          <span className="sr-only" role="status">
            Loading
          </span>
          <span className="invisible" aria-hidden>
            {children}
          </span>
        </>
      ) : (
        children
      )}
    </Element>
  );
}

export default Button;
