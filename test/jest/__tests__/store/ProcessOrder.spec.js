import { createLocalVue, shallowMount } from "@vue/test-utils";
import { mountQuasar } from '@quasar/quasar-app-extension-testing-unit-jest';
import Vue from 'vue';
import ProcessOrder from '../../../../src/components/ProcessOrder'

Vue.config.silent = true;

describe("MyComponent", () => {
  it("When foo is set to -diddly- then set bar to true", () => {
    const ObjectWithStuffInIt = [
      { id: 200, bar: false },
      { id: 300, bar: false }
    ];
    const localVue = createLocalVue();
    const wrapper = mountQuasar(ProcessOrder, {
      localVue,
      propsData: {
        ObjectWithStuffInIt
      }
    });
    wrapper.vm.foo = "diddly";
    // run the method in the component here
    wrapper.vm.doSomeWork();

    expect(ObjectWithStuffInIt[0].bar).toBe(true);
  });
});
