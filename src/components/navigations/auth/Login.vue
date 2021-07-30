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
      label="Email"
      lazy-rules
      :rules="[val => !!val || 'Email is missing', emailFormat]"
    />
    <q-input
      v-model="formData.password"
      :type="isPwd ? 'password' : 'text'"
      outlined
      class="q-mb-md"
      label="Password"
      lazy-rules
      :rules="[val => (val && val.length > 0) || 'Please enter password', hasWhiteSpacesOnly]"
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
        :disabled="disable"
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
import utils from 'src/helpers/utils';
import usersData from 'src/usersDetails/users.json'
export default {
  name: "Login",
  props: ['tab'],
  data () {
    return {
      ...utils,
      formData: {
        email: '',
        password: ''
      },
      isPwd: true,
      errorMessage: '',
      users: usersData
    }
  },
  computed: {
    disable() {
      return !this.formData.email.replace(/\s/g, '').length
        || !this.formData.password.replace(/\s/g, '').length
        || this.emailFormat(this.formData.email) === 'Invalid email'
    }
  },
  methods: {
    submitForm() {
      this.$refs.authForm.validate().then(success => {
        if (success){
            const validUsers = Object.entries(usersData)
            validUsers.map(users => {
              users.filter(user => {
                if (user.password === this.formData.password && user.email === this.formData.email) {
                  if (user.email === 'espira@gmail.com') {
                    this.formData.role = 'store'
                    this.formData.name = user.name
                    this.$store.commit('users/SET_AUTH', true)
                    this.$store.dispatch('users/LOGIN_USER', this.formData)
                      this.$router.push({name: 'StoreLayout'})
                  }else if (user.email === 'marvin@gmail.com') {
                    this.formData.role = 'warehouse'
                    this.formData.name = user.name
                    this.$store.commit('users/SET_AUTH', true)
                    this.$store.dispatch('users/LOGIN_USER', this.formData)
                    this.$router.push({name: 'WarehouseLayout'})
                  }
                }
                else if (user.password !== this.formData.password && user.email !== this.formData.email) {
                  this.loading = false
                }
              })
            })
        } else {
          this.$q.notify({
            message: 'An Error Occurred. Please try again'
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
