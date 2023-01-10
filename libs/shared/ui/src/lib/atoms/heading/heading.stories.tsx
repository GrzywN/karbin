import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './heading';

const Story: ComponentMeta<typeof Heading> = {
  component: Heading,
  title: 'Design System/Atoms/Heading',
};
export default Story;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {};

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

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
};
