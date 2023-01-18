import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleHeader } from './article-header';

const Story: ComponentMeta<typeof ArticleHeader> = {
  component: ArticleHeader,
  title: 'Design System/Molecules/ArticleHeader',
};
export default Story;

const Template: ComponentStory<typeof ArticleHeader> = (args) => (
  <ArticleHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {};
