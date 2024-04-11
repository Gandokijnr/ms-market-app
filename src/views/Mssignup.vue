<template>
    <div class="signin my-9">
      <div class="signin-wrapper mx-auto container"> 
        <form class="flex flex-col  items-center gap-3">
          <div class="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>
          <form>
              <div class="mb-4">
                  <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your email address">
              </div>
              <div class="mb-4">
                  <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
                  <input type="password" id="password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your password">
              </div>
              <div class="mb-4">
                  <label for="password" class="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                  <input type="password" id="password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your password">
              </div>
              <div class="flex items-center justify-between mb-4 my-4">
                  <button type="submit" class="bg-blue-950 text-white p-5 w-full rounded-lg hover:bg-blue-900 focus:outline-none focus:bg-blue-900">Sign Up</button>
              </div>
              <div class="flex gap-3 mb-4 my-4 flex-col">
                  <span class="text-slate-500">Other Sign Up option</span>
                  <button type="submit" class="flex items-center justify-center bg-blue-950 text-white px-4 py-4 w-full rounded-lg hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
                    <img src="../assets/google.png" class="w-1/6" alt="">
                    Sign Up with Google
                  </button>
                  <span class="text-slate-500">Already have an account? <router-link :to="{'name': 'signin'}" class="text-slate-950">Sign In</router-link></span>
              </div>
          </form>
      </div>
        </form>
      </div>    
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  
  
  </script>
  
  