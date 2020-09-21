import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig: any = {
  apiKey: "AIzaSyAzqynpKmGtKHFdVDp5mm9u0RImcGEiTm0",
  authDomain: "vuets-chat.firebaseapp.com",
  databaseURL: "https://vuets-chat.firebaseio.com",
  projectId: "vuets-chat",
  storageBucket: "vuets-chat.appspot.com",
  messagingSenderId: "965879090522",
  appId: "1:965879090522:web:9d8d07dec926658eb43763"
};

firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
}).$mount('#app')
