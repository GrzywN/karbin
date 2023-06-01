import {
  ButtonGroup,
  ChipList,
  Heading,
  Paper,
  Section,
  Text,
} from '@karbin/shared/ui';
import { IconBrandGithub, IconDeviceLaptop, IconSearch } from '@tabler/icons';
import Image, { StaticImageData } from 'next/image';

export interface Project {
  imageFileName: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
  linkCaseStudy?: string;
  linkCaseStudyText: string;
  linkPreview: string;
  linkPreviewText: string;
  linkSource: string;
  linkSourceText: string;
  imageSrc?: StaticImageData;
}

export interface WorkSectionProps {
  sectionTitle: string;
  heading: string | React.ReactNode;
  projects: Project[];
}

export function WorkSection(props: WorkSectionProps) {
  const { sectionTitle, heading } = props;
  let { projects } = props;

  if (projects == null) return null;

  projects = projects.map((project: Project) => ({
    ...project,
    imageSrc: {
      src: `/images/work/${project.imageFileName}`,
      width: 1000,
      height: 1000,
    },
  }));

  return (
    <Section title={sectionTitle}>
      <Heading as="h1" size="xl" color="light">
        {heading}
      </Heading>
      {projects.map((project: Project) => (
        <Paper
          className="p-4 flex flex-col-reverse gap-8 md:p-12 md:gap-12 lg:gap-16 lg:grid lg:grid-cols-2"
          key={project.title}
        >
          <div className="w-full flex flex-col grow gap-4 text-start md:gap-4 lg:gap-6">
            <Heading>{project.title}</Heading>
            <ChipList>
              {project.tags.map(
                (tag: string | React.ReactNode, index: number) => (
                  <ChipList.Chip key={index}>{tag}</ChipList.Chip>
                )
              )}
            </ChipList>
            <Text as="p" size="md" color="dark">
              {project.description}
            </Text>
            <hr className="border-2 border-neutral-900 w-full lg:hidden" />
            <ButtonGroup>
              {project.linkCaseStudy && (
                <ButtonGroup.Button
                  key={0}
                  as="a"
                  href={project.linkCaseStudy}
                  color="primary"
                  isFullWidth
                >
                  <IconSearch color="black" />
                  {project.linkCaseStudyText}
                </ButtonGroup.Button>
              )}
              {project.linkPreview && (
                <ButtonGroup.Button
                  key={1}
                  as="a"
                  href={project.linkPreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="secondary"
                  isFullWidth
                >
                  <IconDeviceLaptop color="black" />
                  {project.linkPreviewText}
                </ButtonGroup.Button>
              )}
              {project.linkSource && (
                <ButtonGroup.Button
                  key={2}
                  as="a"
                  href={project.linkSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="dark"
                  isFullWidth
                >
                  <IconBrandGithub color="white" />
                  {project.linkSourceText}
                </ButtonGroup.Button>
              )}
            </ButtonGroup>
          </div>
          <Image
            className="object-left object-contain max-h-96 lg:max-h-full"
            src={project.imageSrc}
            alt={project.imageAlt}
          />
        </Paper>
      ))}
    </Section>
  );
}

export default WorkSection;
