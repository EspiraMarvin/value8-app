<template>
<div class="q-pa-md">
  <q-list
    separator
    bordered
    class="full-width">
    <q-item
      v-for="order in orders"
      :key="order.id"
      clickable
      v-ripple>
      <q-item-section avatar  v-show="tab === 'processed'">
        <q-checkbox
          v-model="order.status"
          class="no-pointer-events"
          color="primary"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label class="q-item-label">{{ order.name }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn
          v-if="!order.status && user === 'warehouse' "
          @click="dispatchOrder(order)"
          flat
          round
          dense
          color="primary"
          icon="sync" />
      </q-item-section>
    </q-item>
  </q-list>
</div>
</template>

<script>
export default {
  name: "Products",
  props: {
    tab: {
      type: String,
      required: true
    }
  },
  computed: {
    orders() {
      return this.$store.getters['products/GET_ORDERS'].filter(product => {
        return product.status === true ? this.tab === 'processed' : this.tab === 'pending'
      })
    },
    user() {
     return this.$store.getters['users/GET_USER'].role
    },
    products() {
      return  this.$store.getters['products/GET_PRODUCTS'].filter(product => {
          return product.status === true ? this.tab === 'processed' : this.tab === 'pending'
      })
    }
  },
  methods: {
    dispatchOrder(order) {
      this.$store.dispatch('products/UPDATE_PRODUCT', order)

    }
  }
}
</script>

<style scoped>

</style>
