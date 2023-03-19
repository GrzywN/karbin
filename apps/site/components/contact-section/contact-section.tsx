import { EmailAndResumeBox, Heading, Section } from '@karbin/shared/ui';

export interface ContactSectionProps {
  sectionTitle: string;
  heading: string | React.ReactNode;
  email: string;
  resumeFileName: string;
  clipboardButtonLabel: string;
  clipboardPopUpOnSuccessText: string;
  clipboardPopUpOnErrorText: string;
}

export function ContactSection(props: ContactSectionProps) {
  const {
    sectionTitle,
    heading,
    email,
    resumeFileName,
    clipboardButtonLabel,
    clipboardPopUpOnSuccessText,
    clipboardPopUpOnErrorText,
  } = props;

  return (
    <Section title={sectionTitle}>
      <Heading as="h2" size="xl" color="light">
        {heading}
      </Heading>
      <EmailAndResumeBox
        email={email}
        resumeFileName={resumeFileName}
        clipboardButtonLabel={clipboardButtonLabel}
        clipboardPopUpOnSuccessText={clipboardPopUpOnSuccessText}
        clipboardPopUpOnErrorText={clipboardPopUpOnErrorText}
      />
    </Section>
  );
}

export default ContactSection;
