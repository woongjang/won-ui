import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WonSelect, WonSelectLabel, WonSelectOptionItem, WonSelectOptionList } from '../components';

export default {
  title: 'WonComponent/WonSelect',
  component: WonSelect,
  subcomponents: { WonSelectLabel, WonSelectOptionList, WonSelectOptionItem },
} as ComponentMeta<typeof WonSelect>;

const Template: ComponentStory<typeof WonSelect> = props => <WonSelect {...props} />;

export const DefaultSelect = Template.bind({});

const selectItem = ['OPTION1 ', 'OPTION2 ', 'OPTION3 ', 'OPTION4 ', 'OPTION5 '];
DefaultSelect.args = {
  children: (
    <>
      <WonSelectLabel>asd</WonSelectLabel>
      <WonSelectOptionList>
        {selectItem.map(optionValue => (
          <WonSelectOptionItem key={optionValue} value={optionValue}>
            {optionValue}
          </WonSelectOptionItem>
        ))}
      </WonSelectOptionList>
    </>
  ),
};
