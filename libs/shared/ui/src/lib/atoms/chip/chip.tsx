import { cva, VariantProps } from 'class-variance-authority';

const chipStyles = cva(
  'font-sans rounded-full border px-3 py-1 text-xs leading-none',
  {
    variants: {
      color: {
        primary: 'border-primary-300',
        secondary: 'border-secondary-300',
        light: 'border-black',
        dark: 'border-white',
      },
      background: {
        light: 'text-black bg-white',
        dark: 'text-white bg-neutral-900',
      },
    },
    defaultVariants: {
      color: 'light',
      background: 'light',
    },
  }
);

export interface ChipProps extends VariantProps<typeof chipStyles> {
  children: React.ReactNode;
}

export function Chip(props: ChipProps) {
  const { children = 'Lorem ipsum', ...passThroughProps } = props;

  return <span className={chipStyles(passThroughProps)}>{children}</span>;
}

export default Chip;
