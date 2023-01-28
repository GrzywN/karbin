import { cva, VariantProps } from 'class-variance-authority';

const separatorStyles = cva('border-2 border-current opacity-25', {
  variants: {
    size: {
      xs: 'w-1/5',
      sm: 'w-2/5',
      md: 'w-3/5',
      lg: 'w-4/5',
      xl: 'w-full',
    },
  },
});

/* eslint-disable-next-line */
export interface SeparatorProps extends VariantProps<typeof separatorStyles> {}

export function Separator(props: SeparatorProps) {
  return <hr className={separatorStyles(props)} />;
}

export default Separator;
