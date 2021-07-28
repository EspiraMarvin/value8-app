<template>
  <q-form  @submit="submitForm" ref="authForm" class="q-mt-xl" style="width: 80vw; height: 70vh">
    <q-input
      v-if="tab === 'register'"
      v-model="formData.name"
      class="q-mb-md"
      outlined
      label="Name" />
    <q-input
      v-model="formData.email"
      outlined
      class="q-mb-md"
      type="email"
      label="Email" />
    <q-input
      v-model="formData.password"
      :type="isPwd ? 'password' : 'text'"
      outlined
      class="q-mb-md"
      label="Password"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <div class="row">
      <q-space />
      <q-btn
        :loading="loading"
        :disable="loading"
        type="submit"
        color="primary"
        class="q-px-md q-py-sm"
        :label="tab">
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>
  </q-form>
</template>

<script>
import usersData from 'src/usersDetails/users.json'
export default {
  name: "Login",
  props: ['tab'],
  data () {
    return {
      formData: {
        email: 'espira@gmail.com',
        password: '123secret'
      },
      isPwd: true,
      loading: false,
      users: usersData
    }
  },
  methods: {
    submitForm() {
      this.$refs.authForm.validate().then(success => {
        if (success){
          this.loading = true
          const validUsers = Object.entries(usersData)
          validUsers.map(users => {
            users.filter(user => {
              if (user.password === this.formData.password && user.email === this.formData.email) {
                if (user.email === 'espira@gmail.com') {
                  this.formData.role = 'admin'
                  this.$store.commit('users/SET_AUTH', true)
                  this.$store.dispatch('users/LoginUser', this.formData)
                  this.loading = false
                  this.$router.push({name: 'AdminLayout'})
                }else if (user.email === 'marvin@gmail.com') {
                  this.formData.role = 'normal'
                  this.$store.commit('users/SET_AUTH', true)
                  this.$store.dispatch('users/LoginUser', this.formData)
                  this.loading = false
                  this.$router.push({name: 'MainLayout'})
                }
              }
            })
          })
        } else {
          this.loading = false
          this.$q.notify({
            message: 'Error Occurred. Please try again'
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
