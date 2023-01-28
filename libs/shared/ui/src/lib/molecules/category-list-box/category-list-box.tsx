import Heading from '../../atoms/heading/heading';
import Separator from '../../atoms/separator/separator';
import Text from '../../atoms/text/text';

export interface CategoryListBoxProps {
  heading: string | React.ReactNode;
  list: string[] | React.ReactNode[];
}

export function CategoryListBox(props: CategoryListBoxProps) {
  const { heading = 'Lorem ipsum', list = ['Lorem', 'Ipsum', 'Dolor sit'] } =
    props;

  return (
    <section className="grid gap-8">
      <Heading as="h3" size="lg" color="current">
        {heading}
      </Heading>
      <Separator size="xs" />
      <ul className="space-y-1">
        {list.map((item, index) => (
          <Text as="li" size="md" color="current" key={index}>
            {item}
          </Text>
        ))}
      </ul>
    </section>
  );
}

export default CategoryListBox;
