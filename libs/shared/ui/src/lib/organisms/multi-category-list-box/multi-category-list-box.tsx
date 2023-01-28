import { Paper, PaperProps } from '../../molecules/paper/paper';
import CategoryListBox from '../../molecules/category-list-box/category-list-box';

export interface MultiCategoryListBoxProps extends PaperProps {
  classes?: string;
  children: React.ReactNode;
}

export function MultiCategoryListBox(props: MultiCategoryListBoxProps) {
  const {
    classes = '',
    children = (
      <CategoryListBox
        heading="Lorem ipsum"
        list={['Lorem', 'Ipsum', 'Dolor sit']}
      />
    ),
    ...passThroughProps
  } = props;

  return (
    <Paper
      classes={`p-8 grid items-start gap-12 grid-cols-1 md:p-10 md:grid-cols-2 xl:grid-cols-3 xl:p-12 ${classes}`}
      {...passThroughProps}
    >
      {children}
    </Paper>
  );
}

MultiCategoryListBox.CategoryListBox = CategoryListBox;

export default MultiCategoryListBox;
