import { mountQuasar, mountFactory } from '@quasar/quasar-app-extension-testing-unit-jest';
import Orders from '../../../../src/components/orders/Orders';
import {QBtn} from "quasar";
import store from '../../../../src/store';
import Vue from "vue";
import {config, mount} from "@vue/test-utils";
import * as All from "quasar";

Vue.config.silent = true;

config.mocks.$store = store();


const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val;
  }
  return object;
}, {});


describe('Orders Component', () => {
  it('mounts without errors', () => {
    const wrapper = mountQuasar(Orders, {
      quasar: {
        components: {
        },
      },
      propsData: {
        tab: 'pending',
      },
    });

    expect(wrapper).toBeTruthy();
  });
})

describe('Mounts Orders Component',  () => {
  const wrapper = mountQuasar(Orders)

  it('should have props pending', async function () {
    await wrapper.setProps({ tab: 'pending' })
    expect(wrapper.props().tab).toBe('pending')
  });

})
