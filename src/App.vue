<template>
  <ion-app>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title @click="navigateToHome()">Journal Maps</ion-title>
          <ion-title slot="end" size="small">
            <router-link v-if="user.loggedIn" to="/profile">Profile</router-link>
            <router-link v-else to="/login">Login</router-link>
          </ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Journal Maps</ion-title>
          </ion-toolbar>
        </ion-header>
      
        <div id="container">
          <router-view />
        </div>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import router from './router';
import { useStore, mapGetters } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    function authenticateUser(isAuthenticated: boolean) {
      store.commit('SET_LOGGED_IN', isAuthenticated);
    }

    function setUserData(data) {
      store.commit('SET_USER', data)
    }

    return {
      authenticateUser,
      setUserData,
    }
  },
  name: 'App',
  components: {
    IonApp,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  methods: {
    navigateToHome() {
      router.push('/');
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>