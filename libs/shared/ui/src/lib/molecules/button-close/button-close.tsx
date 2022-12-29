import { IconX } from '@tabler/icons';

import Button from '../../atoms/button/button';
import { ButtonProps } from '../../atoms/button/button';

export interface ButtonCloseProps extends ButtonProps {
  ariaLabel: string;
  onClick: () => void;
}

export function ButtonClose(props: ButtonCloseProps) {
  const { ariaLabel, onClick, color = 'light', ...passThroughProps } = props;

  return (
    <Button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      isCircle
      color={color}
      {...passThroughProps}
    >
      <IconX width={32} height={32} aria-hidden />
    </Button>
  );
}

export default ButtonClose;
