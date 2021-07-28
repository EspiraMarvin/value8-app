<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>
          <q-btn flat class="text-capitalize" label="logout" @click="logout" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8 q-mt-md"
        >
<!--          Essential Links-->
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>
<script>
import EssentialLink from 'components/navigations/sidebar/EssentialLink.vue'

const links = [
  { to: '/', name: 'Projects', icon: 'dashboard' },
  { to: '/users', name: 'Users', icon: 'perm_identity' },
  { to: '/tasks', name: 'Tasks', icon: 'perm_identity' },
  { to: '/userlistchat', name: 'Chat', icon: 'chat_bubble_outline' },
  { to: '/settings', name: 'Settings', icon: 'more_horiz' }
]
const linksData = [
  {
    title: 'Products',
    icon: 'store',
    link: 'https://quasar.dev'
  },
  {
    title: 'Orders Pending',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Orders Processed',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  }
];


export default {
  name: "AdminLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('users/LogOutUser')
      this.$router.replace({name: 'AuthLogin'})
    }
  }
}
</script>
