<template>
  <div class="signin my-9">
    <div class="signin-wrapper mx-auto container"> 
      <form class="flex flex-col items-center gap-3" @submit.prevent="handleSignUp">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
            <input v-model="email" type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your email address" required>
            <span v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</span>
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
            <input v-model="password" type="password" id="password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your password" required>
            <span v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</span>
          </div>
          <div class="mb-4">
            <label for="confirmPassword" class="block text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input v-model="confirmPassword" type="password" id="confirmPassword" name="confirmPassword" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Confirm your password" required>
            <span v-if="confirmPasswordError" class="text-red-500 text-sm">{{ confirmPasswordError }}</span>
          </div>
          <div class="flex items-center justify-between mb-4 my-4">
            <button type="submit" class="bg-blue-950 text-white p-5 w-full rounded-lg hover:bg-blue-900 focus:outline-none focus:bg-blue-900 flex items-center justify-center">
              <loader v-if="isLoading" class="mr-2"></loader>
              <span v-if="!isLoading">Sign Up</span>
              <span v-if="isLoading">Signing Up...</span>
            </button>
          </div>
          <div class="flex gap-3 mb-4 my-4 flex-col">
            <span class="text-slate-500">Other Sign Up option</span>
            <button type="button" class="flex items-center justify-center border text-blue-950 px-4 py-4 w-full rounded-lg hover:bg-slate-100 focus:outline-none focus:bg-blue-900">
              <img src="../assets/google.png" class="w-1/6" alt="">
              Sign Up with Google
            </button>
            <span class="text-slate-500">Already have an account? <router-link to="/signin" class="text-slate-950">Sign In</router-link></span>
          </div>
        </div>
      </form>
    </div>    
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import loader from '@/components/loader.vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const emailError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');
const isLoading = ref(false);
const router = useRouter();

const handleSignUp = async () => {
  // Clear previous errors
  emailError.value = '';
  passwordError.value = '';
  confirmPasswordError.value = '';

  // Validate email
  if (!email.value) {
    emailError.value = 'Email is required.';
  }

  // Validate password
  if (!password.value) {
    passwordError.value = 'Password is required.';
  } else if (password.value.length < 4) {
    passwordError.value = 'Password must be at least 4 characters long.';
  }

  // Validate confirm password
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = 'Passwords do not match.';
  }

  // If there are any validation errors, do not proceed
  if (emailError.value || passwordError.value || confirmPasswordError.value) {
    return;
  }

  // Show loader
  isLoading.value = true;

  // Proceed with Firebase sign up
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert('Sign up successful!');
    router.push({ name: 'signin' });
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      emailError.value = 'Email is already in use.';
    } else {
      alert('Error signing up: ' + error.message);
    }
  } finally {
    // Hide loader
    isLoading.value = false;
  }
};
</script>


