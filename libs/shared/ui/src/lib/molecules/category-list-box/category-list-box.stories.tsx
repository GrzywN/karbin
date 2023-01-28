import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CategoryListBox } from './category-list-box';

const Story: ComponentMeta<typeof CategoryListBox> = {
  component: CategoryListBox,
  title: 'Design System/Molecules/CategoryListBox',
};
export default Story;

const Template: ComponentStory<typeof CategoryListBox> = (args) => (
  <CategoryListBox {...args} />
);

export const Default = Template.bind({});
Default.args = {};
