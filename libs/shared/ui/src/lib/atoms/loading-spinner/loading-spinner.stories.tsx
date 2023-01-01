import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoadingSpinner } from './loading-spinner';

const Story: ComponentMeta<typeof LoadingSpinner> = {
  component: LoadingSpinner,
  title: 'Design System/Atoms/LoadingSpinner',
};
export default Story;

const Template: ComponentStory<typeof LoadingSpinner> = (args) => (
  <LoadingSpinner {...args} />
);

export const Default = Template.bind({});
Default.args = {};
