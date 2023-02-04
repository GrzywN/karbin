import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from './stack';

import Heading from '../../atoms/heading/heading';
import Text from '../../atoms/text/text';

const Story: ComponentMeta<typeof Stack> = {
  component: Stack,
  title: 'Design System/Molecules/Stack',
};
export default Story;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Heading as="h2" color="light">
      Lorem ipsum
    </Heading>
    <Text as="p" color="light">
      Lorem ipsum dolor sit amet.
    </Text>
  </Stack>
);

export const Default = Template.bind({});
Default.args = {};
