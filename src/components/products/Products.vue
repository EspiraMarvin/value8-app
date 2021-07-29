<template>
<div>
  <p class="flex flex-center text-h6">List of Products in the Store</p>
  <q-list
    separator
    bordered
    class="full-width">
    <q-item
      v-for="product in products"
      :key="product.id"
      clickable
      v-ripple>
      <q-item-section>
        <q-item-label class="q-item-label">{{ product.name }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn
          v-if="user === 'store'"
          @click="sale(product.id)"
          flat
          round
          dense
          color="primary"
          icon="send" />
      </q-item-section>
    </q-item>
  </q-list>
</div>
</template>

<script>
export default {
  name: "Products",
  computed:{
    products() {
      return  this.$store.getters['products/GET_PRODUCTS']
    },
    productCount(){
      return  this.$store.getters['products/GET_PRODUCTS'].length
    },
    user() {
      return this.$store.getters['users/GET_USER'].role
    }
  },
  watch: {
    deep: true,
    productCount(val){
      if (val === 2) {
        this.$store.dispatch('products/UPDATE_ORDERS')
      }
    }
  },
  methods: {
    sale(id) {
      console.log('index', id)
      this.$store.dispatch('products/SALE_PRODUCT', id)
    }
  }
}
</script>

<style scoped>

</style>
