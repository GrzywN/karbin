import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGroup } from './button-group';

const Story: ComponentMeta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Design System/Molecules/ButtonGroup',
};
export default Story;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {};
