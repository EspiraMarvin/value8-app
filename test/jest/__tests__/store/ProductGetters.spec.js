import getters from '../../../../src/store/modules/products'

const products = [
  {
    name: "Cookies",
    status: true
  },
  {
    name: 'Milk',
    status: true
  },
  {
    name: 'Vegetables',
    status: true
  }
]

const state = { products }


describe("get products", () => {
  it("returns products", () => {
    const actual = getters.getters.GET_PRODUCTS(state)


    expect(state.products).toBeTruthy()
  })
})

