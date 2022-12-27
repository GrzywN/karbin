import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChipList } from './chip-list';

const Story: ComponentMeta<typeof ChipList> = {
  component: ChipList,
  title: 'Design System/Molecules/ChipList',
};
export default Story;

const Template: ComponentStory<typeof ChipList> = (args) => (
  <ChipList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
