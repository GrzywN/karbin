import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from './navbar';

const Story: ComponentMeta<typeof Navbar> = {
  component: Navbar,
  title: 'Design System/Organisms/Navbar',
};
export default Story;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
