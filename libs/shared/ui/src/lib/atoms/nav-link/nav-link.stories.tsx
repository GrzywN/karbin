import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavLink } from './nav-link';

const Story: ComponentMeta<typeof NavLink> = {
  component: NavLink,
  title: 'NavLink',
  args: {
    href: '#',
  },
};
export default Story;

const Template: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
