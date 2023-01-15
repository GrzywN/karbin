import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from './footer';

const Story: ComponentMeta<typeof Footer> = {
  component: Footer,
  title: 'Design System/Organisms/Footer',
};
export default Story;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
