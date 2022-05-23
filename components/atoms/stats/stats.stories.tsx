import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stats } from './stats.style';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/stats',
  component: Stats,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
    statsType: {
      options: ['hp', 'mp', 'ws'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
} as ComponentMeta<typeof Stats>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Stats> = (args) => <Stats {...args} />;


export const HP = Template.bind({});
HP.args = {
    children: "HP",
    statsType: 'hp'
};

export const MP = Template.bind({});
MP.args = {
    children: "MP",
    statsType: 'mp'
};

export const WS = Template.bind({});
WS.args = {
    children: "WS",
    statsType: 'ws'
};
