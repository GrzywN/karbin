import Paper from '../../molecules/paper/paper';
import Button from '../../atoms/button/button';
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
    <Paper classes="p-4 gap-4 max-w-md">
      <Button as="a" href={`mailto:${email}`} color="primary">
        <IconMail />
        <Text color="dark" size="xs">
          {email}
        </Text>
      </Button>
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
    </Paper>
  );
}

export default EmailAndResumeBox;
