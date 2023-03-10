import { Button, Heading, Paper, Section, Text } from '@karbin/shared/ui';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface NotFoundSectionProps {
  sectionTitle: string;
  imageSrc: StaticImageData;
  heading: string | React.ReactNode;
  paragraph: string | React.ReactNode;
  buttonText: string | React.ReactNode;
}

export function NotFoundSection(props: NotFoundSectionProps) {
  const { sectionTitle, imageSrc, heading, paragraph, buttonText } = props;

  return (
    <Section title={sectionTitle}>
      <Paper
        className="mt-8 p-16 grid mx-auto gap-8 place-items-center"
        color="dark"
      >
        <Image src={imageSrc} alt="" height={300} />
        <Heading size="xl" weight="black">
          {heading}
        </Heading>
        <Text>{paragraph}</Text>
        <Link href="/">
          <Button as="span" color="secondary">
            {buttonText}
          </Button>
        </Link>
      </Paper>
    </Section>
  );
}

export default NotFoundSection;
