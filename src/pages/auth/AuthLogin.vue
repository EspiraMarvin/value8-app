<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card flat>
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="primary"
        indicator-color="purple-10"
        align="justify"
      >
        <q-tab name="login" label="Login User" class="text-capitalize" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <Login :tab="tab" />
        </q-tab-panel>

      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import Login from 'components/navigations/auth/Login'
export default {
  name: 'AuthLogin',
  components: { Login },
  data () {
    return {
      tab: 'login'
    }
  }
}
</script>

<style scoped>
</style>
