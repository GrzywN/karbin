import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleNavigationButton } from './article-navigation-button';

const Story: ComponentMeta<typeof ArticleNavigationButton> = {
  component: ArticleNavigationButton,
  title: 'Design System/Molecules/ArticleNavigationButton',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
  args: {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris arcu, tristique. ',
    formattedDate: new Date().toLocaleDateString(),
    tags: ['Lorem', 'Ipsum', 'Dolor sit'],
  },
};
export default Story;

const Template: ComponentStory<typeof ArticleNavigationButton> = (args) => (
  <ArticleNavigationButton {...args} />
);

export const Left = Template.bind({});
Left.args = {
  direction: 'left',
};

export const Right = Template.bind({});
Right.args = {
  direction: 'right',
};
