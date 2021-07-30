import {  orders } from 'src/usersDetails/orders'
import {uid} from "quasar";

const state = () => ({
  products: [
    {
      id: uid(),
      name: "Cookies",
      status: true
    },
    {
      id: uid(),
      name: 'Milk',
      status: true
    },
    {
      id: uid(),
      name: 'Vegetables',
      status: true
    },
    {
      id: uid(),
      name: 'Coca Cola',
      status: true
    },
    {
      id: uid(),
      name: 'Oyster',
      status: true
    }
  ],
  orders: []
})

const getters = {
  GET_PRODUCTS: state => state.products,
  GET_ORDERS: state => state.orders
}

const mutations = {
  ADD_PRODUCT(state, data){
    data.status = true
    state.products.push(data)
  },
  DELETE_PRODUCT(state, id){
    state.products = state.products.filter(product => product.id !== id)
  },
  SET_ORDERS(state, data){
    state.orders = data
  }
}

const actions = {
  UPDATE_ORDERS(context) {
    // generate 3 unprocessed reorders after product count on the store reaches 2
    (() => {
      const size = 3
      const preorders = orders.splice(0, size).map(order => {
        return order
      })
      context.commit('SET_ORDERS', preorders)
    })()
  },
  UPDATE_PRODUCT(context, product){
    context.commit('ADD_PRODUCT', product)

  },
  SALE_PRODUCT(context, id){
    context.commit('DELETE_PRODUCT', id)

  }

}

export default  {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
