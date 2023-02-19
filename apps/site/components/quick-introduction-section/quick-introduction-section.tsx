import { Section, Paper, Text } from '@karbin/shared/ui';

export interface QuickIntroductionSectionProps {
  sectionTitle: string;
  text: string | React.ReactNode;
}

export function QuickIntroductionSection(props: QuickIntroductionSectionProps) {
  const { sectionTitle, text } = props;

  return (
    <Section title={sectionTitle}>
      <Paper className="grid max-w-xl" color="primary" hasPadding>
        <Text as="p" size="sm" color="dark" weight="medium">
          {text}
        </Text>
      </Paper>
    </Section>
  );
}

export default QuickIntroductionSection;
