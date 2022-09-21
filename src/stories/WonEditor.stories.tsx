import { ComponentMeta, ComponentStory } from '@storybook/react';
import WonEditor from '../components/WonEditor/WonEditor';

export default {
  title: 'WonComponent/WonEditor',
  component: WonEditor,
} as ComponentMeta<typeof WonEditor>;

const Template: ComponentStory<typeof WonEditor> = props => <WonEditor {...props} />;

export const HelloWorld = Template.bind({});

Template.args = {
  
}