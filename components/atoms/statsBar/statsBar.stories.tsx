import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatsBar } from './statsBar.style';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/StatsBar',
  component: StatsBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
    statsType: {
      options: ['hp', 'mp', 'ws'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
} as ComponentMeta<typeof StatsBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StatsBar> = (args) => <StatsBar {...args} />;


export const bar = Template.bind({});
bar.args = {
    statsType: 'hp'
};
