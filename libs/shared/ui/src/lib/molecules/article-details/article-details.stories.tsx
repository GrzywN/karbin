import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetails } from './article-details';

const Story: ComponentMeta<typeof ArticleDetails> = {
  component: ArticleDetails,
  title: 'Design System/Molecules/ArticleDetails',
};
export default Story;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
  <ArticleDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {};
