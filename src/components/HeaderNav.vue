<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const dropdownOpen = ref(false);
const helpDropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
  helpDropdownOpen.value = false;
};

const toggleHelpDropdown = () => {
  helpDropdownOpen.value = !helpDropdownOpen.value;
  dropdownOpen.value = false; 
};
const openHelpDropdown = () => {
  helpDropdownOpen.value = true;
};
const closeHelpDropdown = () => {
  helpDropdownOpen.value = false;
};
const openDropdown = () => {
    dropdownOpen.value = true;
};
const closeDropdown = () => {
    dropdownOpen.value = false;
};
</script>

<template>
  <header class="header-section p-6 top-0 sticky z-10">
    <div class="wrapper flex justify-between items-center container mx-auto flex-wrap">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/header icon.png" alt="logo" class="w-2/3"/>
        </router-link>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Search by Brand" class="rounded p-2 w-96 outline-none">
      </div>
      <nav class="text-white">
        <div class="relative inline-block text-left" 
            @mouseenter="openDropdown"
            @mouseleave="closeDropdown"
        >
          <div class="relative">
            <button class="block text-white border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              Account
              <svg v-if="!dropdownOpen" class="h-4 w-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <svg v-else class="h-4 w-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </button>
            <ul v-show="dropdownOpen" class="absolute w-60 bg-white border-gray-300 rounded-md shadow-lg">
              <li class="text-center py-2 hover:bg-blue-950 bg-blue-950 hover:text-white  px-4 m-4 rounded">
              <RouterLink :to="{'name': 'about'}">SIGN IN</RouterLink>
              </li>
              <li class="px-4 py-2 hover:bg-blue-950 hover:text-white text-black">My Account</li>
              <li class="px-4 py-2 hover:bg-blue-950 hover:text-white text-black">Saved Items</li>
              <li class="px-4 py-2 hover:bg-blue-950 hover:text-white text-black">My Shop</li>
            </ul>
          </div>
        </div>
        <div class="relative inline-block text-left" 
            @mouseenter="openHelpDropdown"
            @mouseleave="closeHelpDropdown"
        >
          <div class="relative">
            <button class="block text-white border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              Help
              <svg v-if="!helpDropdownOpen" class="h-4 w-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <svg v-else class="h-4 w-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </button>
            <ul v-show="helpDropdownOpen"  class="absolute w-60 bg-white border-gray-300 rounded-md shadow-lg">
              <li class="px-4 py-2 hover:bg-blue-950 hover:text-white text-black">Help Line</li>
              <li class="px-4 py-2 hover:bg-blue-950 hover:text-white text-black">Report an account</li>
              <li class="text-center py-2 hover:bg-blue-950 bg-blue-950 hover:text-white px-4 m-4 rounded">
              <RouterLink :to="{'name': 'about'}">LIVE CHAT</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button type="button" class="bg-white px-12 p-2 rounded">Sell</button>
    </div>
  </header>
  </template>

<style scoped>
header {
  background-color: #060139;
}
</style>