import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { LanguageSwitcher } from './language-switcher';

const Story: ComponentMeta<typeof LanguageSwitcher> = {
  component: LanguageSwitcher,
  title: 'LanguageSwitcher',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
};
export default Story;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => (
  <LanguageSwitcher {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ariaLabel: '',
};
