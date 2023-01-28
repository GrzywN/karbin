import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MultiCategoryListBox } from './multi-category-list-box';

const Story: ComponentMeta<typeof MultiCategoryListBox> = {
  component: MultiCategoryListBox,
  title: 'Design System/Organisms/MultiCategoryListBox',
};
export default Story;

const Template: ComponentStory<typeof MultiCategoryListBox> = (args) => (
  <MultiCategoryListBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
};

export const Light = Template.bind({});
Light.args = {
  color: 'light',
};

export const Dark = Template.bind({});
Dark.args = { color: 'dark' };
