import { Section, Heading, EmailAndResumeBox } from '@karbin/shared/ui';

export interface ContactSectionProps {
  sectionTitle: string;
  heading: string | React.ReactNode;
  email: string;
  resumeFileName: string;
}

export function ContactSection(props: ContactSectionProps) {
  const { sectionTitle, heading, email, resumeFileName } = props;

  return (
    <Section title={sectionTitle}>
      <Heading as="h2" size="xl" color="light">
        {heading}
      </Heading>
      <EmailAndResumeBox email={email} resumeFileName={resumeFileName} />
    </Section>
  );
}

export default ContactSection;
