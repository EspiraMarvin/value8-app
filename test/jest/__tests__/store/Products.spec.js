// import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import { mountQuasar, mountFactory } from '@quasar/quasar-app-extension-testing-unit-jest';
import * as All from 'quasar';
import {config, createLocalVue} from '@vue/test-utils';
import Vue from 'vue'
import {QBtn} from "quasar";
import Products from '../../../../src/components/products/Products';
import store from '../../../../src/store';

// import Vuex from 'vuex'
//
// const localVue = createLocalVue()
// localVue.use(Vuex);


Vue.config.silent = true;

config.mocks.$store = store();

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val;
  }
  return object;
}, {});

describe('Delete Store Items', () => {
  const wrapper = mountQuasar(Products, {
    quasar: components, QBtn
  })

  it('should expects to find a delete button', function () {
    expect(wrapper.findComponent(QBtn)).toBeTruthy()
  });
})


describe('Mounts Products Component', () => {
  const wrapper = mountQuasar(Products, {
    quasar: components
  })
  const { vm } = wrapper

  it('has a create hook', function () {
    expect(typeof vm.onSubmit).toBe("undefined")
  });

  it('should have store title', function () {
    expect(wrapper.html()).toContain('List of Products in the Store')
  });

  it('should have props pending', function () {
    expect(wrapper.props().tab).toBe(undefined)
  });

  it('has product name oyster from store', function () {
    expect(wrapper.html()).toContain('Oyster')
  });

  it('has a delete hook', function () {
    expect(typeof vm.saleProduct).toBe("function")
  });

  it('has a delete button', function () {
    const deleteProduct = vm.saleProduct
    vm.saleProduct({ index: 0})
    expect(wrapper.html()).toContain('Cookies')
  });

})

