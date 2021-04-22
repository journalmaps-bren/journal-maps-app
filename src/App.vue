<template>
  <ion-app>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title @click="navigateToHome()">Journal Maps</ion-title>
          <ion-title slot="end" size="small">
            <div v-if="!loading">
              <router-link v-if="isAuthenticated" to="/profile">Profile</router-link>
              <button v-else @click="login()">Log in</button>
            </div>
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
import { defineComponent, inject } from 'vue';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import router from './router';

export default defineComponent({
  setup() {
    const auth = inject('Auth');
    return auth;
  },
  name: 'App',
  inject: ['Auth'],
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
    },
    login() {
      this.Auth.loginWithRedirect();
    }
  },
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