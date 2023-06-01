import {
  CategoryListBoxProps,
  Heading,
  MultiCategoryListBox,
  Section,
} from '@karbin/shared/ui';

export interface MyToolsSectionProps {
  sectionTitle: string;
  heading: string | React.ReactNode;
  categories: CategoryListBoxProps[];
}

export function MyToolsSection(props: MyToolsSectionProps) {
  const { sectionTitle, heading, categories } = props;

  return (
    <Section title={sectionTitle}>
      <Heading as="h2" size="xl" color="light">
        {heading}
      </Heading>
      <MultiCategoryListBox color="dark">
        {categories.map(({ heading, list }, index) => (
          <MultiCategoryListBox.CategoryListBox
            heading={heading}
            list={list}
            key={index}
          />
        ))}
      </MultiCategoryListBox>
    </Section>
  );
}

export default MyToolsSection;
