import { Card, Heading, Section, Text } from '@karbin/shared/ui';
import Image from 'next/image';

import MyWorkModal from '../my-work-modal/my-work-modal';

import type { StaticImageData } from 'next/image';

export interface CardData {
  imageFileName: string;
  imageAlt: string;
  imagePriority?: boolean;
  textHeading: string | React.ReactNode;
  textParagraph: string | React.ReactNode;
  textButton: string;
  modalImageFileName: string;
  modalImageAlt: string;
  modalTitle: string;
  modalDescription: string;
  modalTags: string[];
  modalLinkCaseStudy?: string;
  modalLinkCaseStudyText?: string;
  modalLinkPreview: string;
  modalLinkPreviewText: string;
  modalLinkSource: string;
  modalLinkSourceText: string;
  imageSrc?: StaticImageData;
  modalImageSrc?: StaticImageData;
}

export interface MyWorkSectionProps {
  sectionTitle: string;
  heading: string | React.ReactNode;
  cards: CardData[];
}

export function MyWorkSection(props: MyWorkSectionProps) {
  const { sectionTitle, heading } = props;
  let { cards } = props;

  cards = cards.map((card: CardData) => ({
    ...card,
    imageSrc: {
      src: `/images/work/${card.imageFileName}`,
      width: 1920,
      height: 1080,
    },
    modalImageSrc: {
      src: `/images/work/${card.modalImageFileName}`,
      width: 1000,
      height: 1000,
    },
  }));

  return (
    <Section title={sectionTitle}>
      <Heading as="h1" size="xl" color="light">
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
              modalLinkCaseStudyText,
              modalLinkPreview,
              modalLinkPreviewText,
              modalLinkSource,
              modalLinkSourceText,
            },
            index
          ) => (
            <Card key={index}>
              <Image src={imageSrc} alt={imageAlt} priority={imagePriority} />
              <Card.Body>
                <Heading as="h2" size="xs" color="dark">
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
                  linkCaseStudyText={modalLinkCaseStudyText}
                  linkPreview={modalLinkPreview}
                  linkPreviewText={modalLinkPreviewText}
                  linkSource={modalLinkSource}
                  linkSourceText={modalLinkSourceText}
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
