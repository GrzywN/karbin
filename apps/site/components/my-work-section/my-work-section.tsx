import Image from 'next/image';
import { Section, Heading, Card, Text } from '@karbin/shared/ui';

import MyWorkModal from '../my-work-modal/my-work-modal';

import type { StaticImageData } from 'next/image';

export interface CardData {
  imageSrc: StaticImageData;
  imageAlt: string;
  imagePriority?: boolean;
  textHeading: string | React.ReactNode;
  textParagraph: string | React.ReactNode;
  textButton: string;
  modalImageSrc: StaticImageData;
  modalImageAlt: string;
  modalTitle: string;
  modalDescription: string;
  modalTags: string[];
  modalLinkCaseStudy?: string;
  modalLinkPreview: string;
  modalLinkSource: string;
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
      <Heading as="h1" size="xl">
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
              modalImageSrc,
              modalImageAlt,
              modalTitle,
              modalDescription,
              modalTags,
              modalLinkCaseStudy,
              modalLinkPreview,
              modalLinkSource,
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
                <MyWorkModal
                  id={index.toString()}
                  textButton={textButton}
                  imageSrc={modalImageSrc}
                  imageAlt={modalImageAlt}
                  title={modalTitle}
                  description={modalDescription}
                  chips={modalTags}
                  linkCaseStudy={modalLinkCaseStudy}
                  linkPreview={modalLinkPreview}
                  linkSource={modalLinkSource}
                />
              </Card.Body>
            </Card>
          )
        )}
      </div>
    </Section>
  );
}

export default MyWorkSection;
