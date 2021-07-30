import mutations from '../../../../src/store/modules/products'

describe("ADD_PRODUCT",  () => {
  it('add a product to the state', function () {
    const product =  {
      name: "watermelon",
      status: true
    }

    const state = {
      products: [],
    }

    mutations.mutations.ADD_PRODUCT(state, { product })

    expect(state.products).toBeTruthy()
  });
})

