import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonClose } from './button-close';

const Story: ComponentMeta<typeof ButtonClose> = {
  component: ButtonClose,
  title: 'Design System/Molecules/ButtonClose',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
  args: {
    ariaLabel: 'Lorem ipsum',
  },
};
export default Story;

const Template: ComponentStory<typeof ButtonClose> = (args) => (
  <ButtonClose {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Light = Template.bind({});
Light.args = {
  color: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  color: 'dark',
};
