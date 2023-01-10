import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavLink } from './nav-link';

const Story: ComponentMeta<typeof NavLink> = {
  component: NavLink,
  title: 'Design System/Atoms/NavLink',
  args: {
    href: '#',
  },
};
export default Story;

const Template: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args} />
);

export const Default = Template.bind({});
Default.args = {};
