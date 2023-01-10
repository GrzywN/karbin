import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './card';

const Story: ComponentMeta<typeof Card> = {
  component: Card,
  title: 'Design System/Molecules/Card',
};
export default Story;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};
