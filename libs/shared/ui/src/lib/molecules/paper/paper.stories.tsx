import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paper } from './paper';

const Story: ComponentMeta<typeof Paper> = {
  component: Paper,
  title: 'Design System/Molecules/Paper',
};
export default Story;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

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
Dark.args = {
  color: 'dark',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
};
