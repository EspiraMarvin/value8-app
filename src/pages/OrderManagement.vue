<template>
  <div class="q-pa-sm">
    <q-tabs
      v-model="tab"
      class="text-grey"
      active-color="primary"
      indicator-color="purple-10"
      align="justify"
    >
      <q-tab name="pending" label="Pending Orders" class="text-capitalize" />
      <q-tab name="processed" label="Processed Orders" class="text-capitalize" v-if="user !== 'warehouse'" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="pending">
        <Orders :tab="tab" />
      </q-tab-panel>
      <q-tab-panel name="processed" v-if="user !== 'warehouse'">
        <Orders :tab="tab" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Orders from "components/orders/Orders";
export default {
name: "Normal",
  components: {Orders},
  data () {
    return {
      tab: 'pending'
    }
  },
  computed: {
    user() {
      return this.$store.getters['users/GET_USER'].role
    }
  }
}
</script>

<style scoped>

</style>
