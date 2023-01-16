import Image from 'next/image';
import { Section, Heading, Card, Text, Button } from '@karbin/shared/ui';
import { IconArrowRight } from '@tabler/icons';

import type { StaticImageData } from 'next/image';

export interface CardData {
  imageSrc: StaticImageData;
  imageAlt: string;
  imagePriority?: boolean;
  textHeading: string | React.ReactNode;
  textParagraph: string | React.ReactNode;
  textButton: string | React.ReactNode;
  buttonHref: string;
}

export interface MyWorkSectionProps {
  sectionTitle: string;
  heading: string | React.ReactNode;
  cards: CardData[];
}

export function MyWorkSection(props: MyWorkSectionProps) {
  const { sectionTitle, heading, cards } = props;

  return (
    <Section title={sectionTitle}>
      <Heading as="h2" size="xl">
        {heading}
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cards.map(
          (
            {
              imageSrc,
              imageAlt,
              imagePriority = false,
              textHeading,
              textParagraph,
              textButton,
              buttonHref,
            },
            index
          ) => (
            <Card key={index}>
              <Image src={imageSrc} alt={imageAlt} priority={imagePriority} />
              <Card.Body>
                <Heading as="h3" size="xs" color="dark">
                  {textHeading}
                </Heading>
                <Text as="p" color="dark" size="xs" weight="medium">
                  {textParagraph}
                </Text>
                <hr className="mt-auto" />
                <Button as="a" href={buttonHref} color="secondary">
                  {textButton} <IconArrowRight color="black" />
                </Button>
              </Card.Body>
            </Card>
          )
        )}
      </div>
    </Section>
  );
}

export default MyWorkSection;
