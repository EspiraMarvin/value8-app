import mutations from '../../../../src/store/modules/products'

describe("SET_ORDERS",  () => {
  it('add a order to the store order', function () {
    const order =  {
      name: "orange",
      status: false
    }

    const state = {
      orders: [],
    }

    mutations.mutations.SET_ORDERS(state, { order })

    expect(state.orders).toBeTruthy()
  });
})
