import { IconClipboard } from '@tabler/icons';
import { useCallback, useState } from 'react';
import Button from '../../atoms/button/button';
import useCopyToClipboard from '../../hooks/use-copy-to-clipboard/use-copy-to-clipboard';
import Paper from '../../molecules/paper/paper';

export interface CopyToClipboardButtonProps {
  buttonLabel: string;
  textToCopy: string;
  popUpTextOnSuccess?: string | React.ReactNode;
  popUpTextOnError?: string | React.ReactNode;
  popupTimeout?: number;
  position?: 'top' | 'bottom';
}

export function CopyToClipboardButton(props: CopyToClipboardButtonProps) {
  const {
    buttonLabel,
    textToCopy,
    popUpTextOnSuccess = 'Copied to clipboard!',
    popUpTextOnError = 'Failed to copy to clipboard!',
    popupTimeout = 2000,
    position = 'top',
  } = props;

  const [value, copy] = useCopyToClipboard();
  const [opened, setOpened] = useState<boolean>(false);
  const [error, setError] = useState(false);

  const handleCopyToClipboardClick = useCallback(async () => {
    const isCopiedSucessfully = await copy(textToCopy);

    if (isCopiedSucessfully) {
      setOpened(true);
      setTimeout(() => {
        setOpened((prevState) => !prevState);
      }, popupTimeout);
    } else {
      setError(true);
      setTimeout(() => {
        setError((prevState) => !prevState);
      }, popupTimeout);
    }
  }, [copy, textToCopy, popupTimeout]);

  return (
    <>
      <Button
        as="button"
        type="button"
        color="light"
        title={buttonLabel}
        onClick={handleCopyToClipboardClick}
      >
        <IconClipboard />
      </Button>
      {value && opened && (
        <Paper
          className={`p-2 absolute ${
            position === 'top'
              ? '-top-2 -right-2 -translate-y-full'
              : '-bottom-2 -right-2 translate-y-full'
          } w-max`}
          color="success"
        >
          {popUpTextOnSuccess}
        </Paper>
      )}
      {error && (
        <Paper
          className={`p-2 absolute ${
            position === 'top'
              ? '-top-2 -right-2 -translate-y-full'
              : '-bottom-2 -right-2 translate-y-full'
          } w-max`}
          color="danger"
        >
          {popUpTextOnError}
        </Paper>
      )}
    </>
  );
}

export default CopyToClipboardButton;
