import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from './container';

const Story: ComponentMeta<typeof Container> = {
  component: Container,
  title: 'Design System/Templates/Container',
};
export default Story;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {};
