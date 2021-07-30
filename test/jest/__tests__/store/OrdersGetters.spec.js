import getters from '../../../../src/store/modules/products'

const orders = [
  {
    name: "Groundnuts",
    status: false
  },
  {
    name: 'Peas',
    status: false
  },
  {
    name: 'Green Grams',
    status: false
  }
]

const state = { orders }


describe("get orders", () => {
  it("returns orders", () => {
    const actual = getters.getters.GET_ORDERS(state)


    expect(state.orders).toBeTruthy()
  })
})
