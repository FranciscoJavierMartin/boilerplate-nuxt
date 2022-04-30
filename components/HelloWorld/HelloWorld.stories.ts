import HelloWorld from './HelloWorld.vue';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
  args: {},
};

const Template = (args) => ({
  components: { HelloWorld },
  setup() {
    return { args };
  },
  template: '<HelloWorld v-bind="args"/>',
});

export const Basic = Template.bind({});
Basic.args = {};
