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
