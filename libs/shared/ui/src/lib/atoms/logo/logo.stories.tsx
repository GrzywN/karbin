import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from './logo';

const Story: ComponentMeta<typeof Logo> = {
  component: Logo,
  title: 'Logo',
  args: {
    as: 'h2',
  },
};
export default Story;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.args = {
  color: 'dark',
};

export const Light = Template.bind({});
Light.args = {
  color: 'light',
};
