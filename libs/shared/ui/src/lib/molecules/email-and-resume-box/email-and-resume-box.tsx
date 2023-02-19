import Paper from '../../molecules/paper/paper';
import Stack from '../../molecules/stack/stack';
import Button from '../../atoms/button/button';
import CopyToClipboardButton from '../../molecules/copy-to-clipboard-button/copy-to-clipboard-button';
import Text from '../../atoms/text/text';
import { IconMail, IconFile } from '@tabler/icons';

export interface EmailAndResumeBoxProps {
  email: string;
  resumeFileName: string;
}

export function EmailAndResumeBox(props: EmailAndResumeBoxProps) {
  const {
    email = 'example@example.com',
    resumeFileName = 'Resume-Jane-Doe.pdf',
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
            buttonLabel="Copy to clipboard"
            textToCopy={email}
            popUpTextOnSuccess="Copied to clipboard!"
            popUpTextOnError="Failed to copy to clipboard!"
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
