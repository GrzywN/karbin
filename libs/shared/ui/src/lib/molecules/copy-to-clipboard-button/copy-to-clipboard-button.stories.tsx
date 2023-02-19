import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CopyToClipboardButton } from './copy-to-clipboard-button';

const Story: ComponentMeta<typeof CopyToClipboardButton> = {
  component: CopyToClipboardButton,
  title: 'Design System/Molecules/CopyToClipboardButton',
};
export default Story;

const Template: ComponentStory<typeof CopyToClipboardButton> = (args) => (
  <div className="w-full min-h-screen grid place-items-center">
    <div className="relative">
      <CopyToClipboardButton {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  buttonLabel: 'Copy to clipboard',
  textToCopy: 'Copied text',
  popUpTextOnSuccess: 'Copied to clipboard!',
  popUpTextOnError: 'Failed to copy to clipboard!',
  popupTimeout: 2000,
};

export const Top = Template.bind({});
Top.args = {
  buttonLabel: 'Copy to clipboard',
  textToCopy: 'Copied text',
  popUpTextOnSuccess: 'Copied to clipboard!',
  popUpTextOnError: 'Failed to copy to clipboard!',
  popupTimeout: 2000,
  position: 'top',
};

export const Bottom = Template.bind({});
Bottom.args = {
  buttonLabel: 'Copy to clipboard',
  textToCopy: 'Copied text',
  popUpTextOnSuccess: 'Copied to clipboard!',
  popUpTextOnError: 'Failed to copy to clipboard!',
  popupTimeout: 2000,
  position: 'bottom',
};
