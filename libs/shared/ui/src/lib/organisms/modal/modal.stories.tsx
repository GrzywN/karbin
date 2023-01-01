import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './modal';

const Story: ComponentMeta<typeof Modal> = {
  component: Modal,
  title: 'Design System/Organisms/Modal',
  argTypes: {
    onClose: { action: 'onClose executed!' },
  },
  args: {
    open: true,
  },
};
export default Story;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {};
