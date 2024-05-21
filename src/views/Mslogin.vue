<template>
  <div class="signin my-9">
    <div class="signin-wrapper mx-auto container"> 
      <div class="flex flex-col items-center gap-3">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 class="text-2xl font-semibold mb-4">Sign In</h2>
          <form @submit.prevent="login">
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" v-model="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your email address">
            </div>
            <div class="mb-4">
              <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
              <input type="password" id="password" v-model="password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your password">
            </div>
            <a href="#" class="text-blue-950 hover:underline">Forgot password?</a>
            <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
            <div class="flex items-center justify-between mb-4 my-4">
              <button type="submit" class="bg-blue-950 text-white p-5 w-full rounded-lg hover:bg-blue-900 focus:outline-none focus:bg-blue-900">Sign In</button>
            </div>
            <div class="flex gap-3 mb-4 my-4 flex-col">
              <span class="text-slate-500">Other sign in option</span>
              <button @click="signInWithGoogle" class="flex items-center justify-center border text-blue-950 px-4 py-4 w-full rounded-lg hover:bg-slate-100 focus:outline-none focus:bg-blue-900">
                <img src="../assets/google.png" class="w-1/6" alt="">
                Sign In with Google
              </button>
              <span class="text-slate-500">Yet to have an account? <router-link :to="{ name: 'signup' }" class="text-slate-950">Sign Up</router-link></span>
            </div>
          </form>
        </div>
      </div>
    </div>    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const auth = getAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    console.log(user)
    // Redirect to home page or dashboard after successful login
    router.push('/');
  } catch (err) {
    console.error(err.message);
    switch (err.code) {
      case 'auth/invalid-email':
      error.value = 'Invalid email address.';
        break;
      case 'auth/user-disabled':
        error.value = 'This user has been disabled.';
        break;
      case 'auth/user-not-found':
        error.value = 'User not found.';
        break;
      case 'auth/wrong-password':
        error.value = 'Incorrect password.';
        break;
        case 'auth/too-many-requests':
        error.value = 'Too many unsuccessful login attempts. Please try again later.';
        break;
        case 'auth/invalid-credential':
        error.value = 'Invalid email or password';
        break;
      default:
        error.value = 'An error occurred. Please try again.';
    }
  }
}

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    // Redirect to home page or dashboard after successful login
    router.push('/');
  } catch (err) {
    console.error(err.message);
    error.value = 'An error occurred while signing in with Google. Please try again.';
  }
}

</script>
