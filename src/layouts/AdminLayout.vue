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
          Admin Panel
        </q-toolbar-title>
        <q-btn-dropdown stretch flat>
          <template #label>
            <p class="q-mx-md gt-sm" style="margin-bottom: -1px">{{ user.name }}</p>
            <q-avatar color="white" text-color="primary">{{ user.name.charAt(0)}} </q-avatar>
          </template>
          <q-list>
            <q-item clickable tabindex="0" @click="logout">
              <q-item-section class="tw-cursor-pointer" side>
                <q-icon name="logout" ></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label @click="logout">Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
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
  computed:{
    user() {
      return this.$store.getters['users/GET_USER']
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
