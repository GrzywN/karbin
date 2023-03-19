import { IconFile, IconMail } from '@tabler/icons';
import Button from '../../atoms/button/button';
import Text from '../../atoms/text/text';
import CopyToClipboardButton from '../../molecules/copy-to-clipboard-button/copy-to-clipboard-button';
import Paper from '../../molecules/paper/paper';
import Stack from '../../molecules/stack/stack';

export interface EmailAndResumeBoxProps {
  email: string;
  resumeFileName: string;
  clipboardButtonLabel: string;
  clipboardPopUpOnSuccessText: string;
  clipboardPopUpOnErrorText: string;
}

export function EmailAndResumeBox(props: EmailAndResumeBoxProps) {
  const {
    email = 'example@example.com',
    resumeFileName = 'Resume-Jane-Doe.pdf',
    clipboardButtonLabel = 'Copy to clipboard',
    clipboardPopUpOnSuccessText = 'Copied to clipboard!',
    clipboardPopUpOnErrorText = 'Failed to copy to clipboard!',
  } = props;

  return (
    <Paper className="p-4 max-w-md">
      <Stack>
        <address className="not-italic relative inline-flex items-center gap-2 underline">
          <Button as="a" href={`mailto:${email}`} color="primary">
            <IconMail />
            <Text color="dark" size="xs">
              {email}
            </Text>
          </Button>
          <CopyToClipboardButton
            buttonLabel={clipboardButtonLabel}
            textToCopy={email}
            popUpTextOnSuccess={clipboardPopUpOnSuccessText}
            popUpTextOnError={clipboardPopUpOnErrorText}
          />
        </address>
        <Text
          as="a"
          href={`/${resumeFileName}`}
          type="application/pdf"
          color="dark"
          link
        >
          <span className="inline-flex items-center gap-2 underline">
            <IconFile color="black" /> {resumeFileName}
          </span>
        </Text>
      </Stack>
    </Paper>
  );
}

export default EmailAndResumeBox;
