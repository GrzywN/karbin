import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Section } from './section';

const Story: ComponentMeta<typeof Section> = {
  component: Section,
  title: 'Design System/Templates/Section',
};
export default Story;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '',
};
