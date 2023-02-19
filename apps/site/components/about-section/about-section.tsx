import Image, { StaticImageData } from 'next/image';
import { Section, Heading, Avatar, Text, Paper } from '@karbin/shared/ui';

export interface AboutSectionProps {
  sectionTitle: string;
  heading: string | React.ReactNode;
  paragraphs: string[] | React.ReactNode[];
  imageSrc: StaticImageData;
  imageAlt: string;
}

export function AboutSection(props: AboutSectionProps) {
  const { sectionTitle, heading, paragraphs, imageSrc, imageAlt } = props;

  return (
    <>
      <Section title={sectionTitle}>
        <figure className="mt-16 flex gap-4 justify-between">
          <Heading as="h1" size="xl" color="light">
            {heading}
          </Heading>
          <span className="shrink-0 lg:hidden">
            <Avatar>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={64}
                height={64}
                priority
              />
            </Avatar>
          </span>
        </figure>
        <div className="flex items-center lg:flex-row lg:gap-16">
          <Paper
            className="max-w-2xl flex-1 flex flex-col items-start justify-between gap-4"
            color="primary"
            hasPadding
          >
            {paragraphs.map((paragraph, index) => (
              <Text size="sm" color="dark" weight="medium" key={index}>
                {paragraph}
              </Text>
            ))}
          </Paper>
          <Image
            className="hidden rounded-full border-8 border-primary-300 shadow-2xl max-w-sm lg:block"
            src={imageSrc}
            alt={imageAlt}
            priority
          />
        </div>
      </Section>
    </>
  );
}

export default AboutSection;
