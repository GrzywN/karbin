import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Design System/Atoms/Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

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
};

export const Dark = Template.bind({});
Dark.args = { color: 'dark' };
