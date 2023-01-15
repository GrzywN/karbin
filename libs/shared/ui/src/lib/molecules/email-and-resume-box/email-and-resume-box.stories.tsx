import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmailAndResumeBox } from './email-and-resume-box';

const Story: ComponentMeta<typeof EmailAndResumeBox> = {
  component: EmailAndResumeBox,
  title: 'Design System/Molecules/EmailAndResumeBox',
};
export default Story;

const Template: ComponentStory<typeof EmailAndResumeBox> = (args) => (
  <EmailAndResumeBox {...args} />
);

export const Default = Template.bind({});
Default.args = {};
