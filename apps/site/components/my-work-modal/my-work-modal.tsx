import {
  Button,
  ButtonGroup,
  ChipList,
  Heading,
  Modal,
  Text,
} from '@karbin/shared/ui';
import {
  IconArrowRight,
  IconBrandGithub,
  IconDeviceLaptop,
  IconSearch,
} from '@tabler/icons';
import Image from 'next/image';
import { useState } from 'react';

import Portal from '../../components/portal/portal';

import type { StaticImageData } from 'next/image';

export interface MyWorkModalProps {
  id: string;
  textButton: string | React.ReactNode;
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  chips: string[];
  linkCaseStudy?: string;
  linkCaseStudyText: string;
  linkPreview: string;
  linkPreviewText: string;
  linkSource: string;
  linkSourceText: string;
}

export function MyWorkModal(props: MyWorkModalProps) {
  const {
    id,
    textButton,
    title,
    description,
    imageSrc,
    imageAlt,
    chips = ['Lorem', 'Ipsum', 'Dolor sit'],
    linkCaseStudy,
    linkCaseStudyText,
    linkPreview,
    linkPreviewText,
    linkSource,
    linkSourceText,
  } = props;

  const [opened, setOpened] = useState<boolean>(false);

  const myWorkModalIdPrefix = 'MyWorkModal__';
  const titleId = `${myWorkModalIdPrefix}${id}-title`;
  const descriptionId = `${myWorkModalIdPrefix}${id}-description`;

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <>
      <Button onClick={() => setOpened(true)} color="secondary">
        {textButton} <IconArrowRight color="black" />
      </Button>
      <Portal>
        <Modal
          open={opened}
          onClose={handleClose}
          modalId={`${myWorkModalIdPrefix}${id}`}
          titleId={titleId}
          descriptionId={descriptionId}
        >
          <div className="relative w-full rounded overflow-hidden">
            <div className="bg-neutral-200 animate-pulse max-w-[454px] w-full aspect-square" />
            <Image
              className="object-contain"
              src={imageSrc}
              alt={imageAlt}
              fill
            />
          </div>
          <Modal.ModalBody>
            <Heading color="dark" id={titleId}>
              {title}
            </Heading>
            <ChipList>
              {chips.map((chip, index) => (
                <ChipList.Chip key={index}>{chip}</ChipList.Chip>
              ))}
            </ChipList>
            <Text as="p" size="sm" color="dark" id={descriptionId}>
              {description}
            </Text>
            <hr className="border-2 border-neutral-900 w-full lg:hidden" />
            <ButtonGroup>
              {linkCaseStudy && (
                <ButtonGroup.Button
                  key={0}
                  as="a"
                  href={linkCaseStudy}
                  color="primary"
                  isFullWidth
                >
                  <IconSearch color="black" />
                  {linkCaseStudyText}
                </ButtonGroup.Button>
              )}
              {linkPreview && (
                <ButtonGroup.Button
                  key={1}
                  as="a"
                  href={linkPreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="secondary"
                  isFullWidth
                >
                  <IconDeviceLaptop color="black" />
                  {linkPreviewText}
                </ButtonGroup.Button>
              )}
              {linkSource && (
                <ButtonGroup.Button
                  key={2}
                  as="a"
                  href={linkSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="dark"
                  isFullWidth
                >
                  <IconBrandGithub color="white" />
                  {linkSourceText}
                </ButtonGroup.Button>
              )}
            </ButtonGroup>
          </Modal.ModalBody>
        </Modal>
      </Portal>
    </>
  );
}

export default MyWorkModal;
