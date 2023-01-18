import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './avatar';

const Story: ComponentMeta<typeof Avatar> = {
  component: Avatar,
  title: 'Design System/Atoms/Avatar',
};
export default Story;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {};
