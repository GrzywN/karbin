import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article } from './article';

const Story: ComponentMeta<typeof Article> = {
  component: Article,
  title: 'Design System/Organisms/Article',
};
export default Story;

const Template: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);

export const Default = Template.bind({});
Default.args = {};
