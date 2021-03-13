<template>
  <form @submit.prevent="registerUser('email')">
    <h3>Sign Up</h3>

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
        <ion-button type="submit" color="primary" expand="block">Sign Up</ion-button>
      </ion-col>
    </ion-row>

    <div>
      Already registered? Sign in <router-link to="/login">here</router-link>
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
import router from '../../router/index';
import { auth } from '../../firebase-util';

export default defineComponent({
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
    async registerUser(loginType) {      
      if (loginType === 'email') {
        try {
          const user = await auth.createUserWithEmailAndPassword(this.email, this.password);
          this.setUserData(user);
          this.authenticateUser(true);
          router.push('/');
        } catch (error) {
          this.authenticateUser(false);
          if (error.code == 'auth/weak-password') {
            console.log('your moves are weak');
          } else {
            console.log(error.message);
          }
        }
      }
    }
  },
  computed: {
    isLoggedIn() {
      return !!auth.currentUser;
    }
  }
});

</script>

<style scoped>

</style>