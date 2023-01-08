import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './text';

const Story: ComponentMeta<typeof Text> = {
  component: Text,
  title: 'Design System/Atoms/Text',
  args: {
    as: 'p',
  },
};
export default Story;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Gray = Template.bind({});
Gray.args = {
  color: 'gray',
};

export const Light = Template.bind({});
Light.args = {
  color: 'light',
};

export const Dark = Template.bind({});
Dark.args = { color: 'dark' };

export const Link = Template.bind({});
Link.args = {
  as: 'a',
  link: 'true',
  size: 'md',
};

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
