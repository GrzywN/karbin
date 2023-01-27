import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Separator } from './separator';

const Story: ComponentMeta<typeof Separator> = {
  component: Separator,
  title: 'Design System/Atoms/Separator',
};
export default Story;

const Template: ComponentStory<typeof Separator> = (args) => (
  <Separator {...args} />
);

export const Default = Template.bind({});
Default.args = {};
