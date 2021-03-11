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
  </form>

  {{ isLoggedIn }}
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
import { auth } from '../firebase-util';

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
    loginUser(loginType) {      
      if (loginType === 'email') {
        auth.signInWithEmailAndPassword(this.email, this.password);
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