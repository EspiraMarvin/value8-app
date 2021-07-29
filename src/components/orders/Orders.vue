<template>
<div class="q-pa-md">
  <q-list
    separator
    bordered
    class="full-width">
    <q-item
      v-for="(product) in products"
      :key="product.name"
      clickable
      v-ripple>
      <q-item-section avatar  v-show="tab === 'processed'">
        <q-checkbox
          v-model="product.status"
          class="no-pointer-events"
          color="primary"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label class="q-item-label">{{ product.name }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn
          v-if="!product.status"
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
  props: {
    tab: {
      type: String,
      required: true
    }
  },
  computed: {
    products() {
      return  this.$store.getters['products/GET_PRODUCTS'].filter(product => {
          return product.status === true ? this.tab === 'processed' : this.tab === 'pending'
      })
    }
  }
}
</script>

<style scoped>

</style>
