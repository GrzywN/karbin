import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './text';

const Story: ComponentMeta<typeof Text> = {
  component: Text,
  title: 'Text',
  args: {
    as: 'p',
  },
};
export default Story;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {};

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