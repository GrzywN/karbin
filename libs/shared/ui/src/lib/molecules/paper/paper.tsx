import { cva, VariantProps } from 'class-variance-authority';

const paperStyles = cva('overflow-hidden rounded-lg shadow-lg', {
  variants: {
    color: {
      primary: 'bg-primary-400 text-neutral-900',
      secondary: 'bg-secondary-400 text-neutral-900',
      tertiary: 'bg-tertiary-400 text-neutral-900',
      light: 'bg-neutral-100 text-neutral-900',
      dark: 'bg-neutral-900 text-white',
      success: 'bg-success-400 text-neutral-900',
      danger: 'bg-danger-400 text-neutral-900',
      warning: 'bg-warning-400 text-neutral-900',
    },
    hasBorder: {
      true: 'border-2 border-r-4 border-b-4 border-black',
    },
    hasPadding: {
      true: 'p-4',
    },
  },
  defaultVariants: {
    color: 'light',
    hasBorder: true,
  },
});

export interface PaperProps extends VariantProps<typeof paperStyles> {
  classes?: string;
  children?: React.ReactNode;
}

export function Paper(props: PaperProps) {
  const { classes = '', children = 'Lorem ipsum', ...passThroughProps } = props;

  return (
    <div className={`${paperStyles(passThroughProps)} ${classes}`}>
      {children}
    </div>
  );
}

export default Paper;
