import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from './chip';

const Story: ComponentMeta<typeof Chip> = {
  component: Chip,
  title: 'Chip',
};
export default Story;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

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

export const Light = Template.bind({});
Light.args = {
  color: 'light',
  background: 'light',
};

export const Dark = Template.bind({});
Dark.args = { color: 'dark', background: 'dark' };
