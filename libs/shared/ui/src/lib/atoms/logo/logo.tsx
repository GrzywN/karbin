import { cva, VariantProps } from 'class-variance-authority';

const logoStyles = cva(['font-cursive', 'text-2xl', 'md:text-3xl'], {
  variants: {
    color: {
      dark: 'text-neutral-800',
      light: 'text-neutral-100',
    },
  },
  defaultVariants: {
    color: 'light',
  },
});

export type LogoProps = VariantProps<typeof logoStyles>;

export function Logo(props: LogoProps) {
  return <h2 className={logoStyles(props)}>Karol Binkowski</h2>;
}

export default Logo;
