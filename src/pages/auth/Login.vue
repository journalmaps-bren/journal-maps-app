<template>
  <form @submit.prevent="loginUser('email')">
    <ion-item lines="full">
      <ion-label position="floating">Email</ion-label>
      <ion-input type="text" v-model="email" required></ion-input>
    </ion-item>

    <ion-item lines="full">
      <ion-label position="floating">Password</ion-label>
      <ion-input type="password" v-model="password" required></ion-input>
    </ion-item>

    <ion-row>
      <ion-col>
        <ion-button type="submit" color="primary" expand="block">Sign In</ion-button>
      </ion-col>
    </ion-row>

    <div>
      New user? Sign up <router-link to="/register">here</router-link>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton
} from '@ionic/vue';
import { auth } from '../../firebase-util';
import router from '../../router/index';
import { useStore } from 'vuex';

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
      setUserData
    }
  },
  name: 'Login',
  components: {
    IonItem,
    IonLabel,
    IonInput,
    IonRow,
    IonCol,
    IonButton
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async loginUser(loginType) {
      if (loginType === 'email') {
        try {
          const user = await auth.signInWithEmailAndPassword(this.email, this.password);
          this.setUserData(user);
          this.authenticateUser(true);
          router.push('/');
        } catch (error) {
          this.authenticateUser(false);
          console.log(error);
        }
      }
    }
  },
});

</script>

<style scoped>

</style>