<template>
    <div class="container grid grid-cols-4 sticky top-0">
      <!-- Sidebar -->
      <div class="sidebar h-screen  bg-gray-900 py-10 flex flex-col gap-8">
        <div v-for="(outerItem, outerIndex) in dropdownItems" :key="outerIndex" class="relative inline-block text-left" @mouseenter="openHelpDropdown(outerIndex)" @mouseleave="closeHelpDropdown(outerIndex)">
          <div class="relative">
            <span class="flex items-center justify-between text-white border-gray-300 hover:text-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              {{ outerItem.title }}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <ul v-show="helpDropdownOpen === outerIndex" class="absolute bg-white left-40 border-gray-300 rounded-md shadow-lg dropdown-card top-0">
              <li v-for="(innerItem, innerIndex) in outerItem.subItems" :key="innerIndex" class="px-4 py-2 hover:bg-blue-950 hover:text-white text-black">{{ innerItem }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main col-span-3 m-8">
        <img src="../assets/main image.png" alt="">
        <trendingAds />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import trendingAds from '@/components/trendingAds.vue'
  
  const dropdownItems = [
    { title: 'Phones and Tablets', subItems: ['iPhone', 'Samsung', 'Infinix', 'Tekno', 'Itel', 'Others'] },
    { title: 'Computing', subItems: ['Laptops', 'Desktops', 'Tablets', 'Accessories'] },
    { title: 'Electronics', subItems: ['TVs', 'Cameras', 'Audio Equipment', 'Accessories'] },
    { title: 'Fashion', subItems: ['Clothing', 'Shoes', 'Accessories', 'Jewelry'] },
    { title: 'Services', subItems: ['Repairs', 'Installations', 'Maintenance', 'Consultations'] },
    { title: 'Agriculture and Food', subItems: ['Produce', 'Livestock', 'Equipment', 'Services'] }
  ];
  
  const helpDropdownOpen = ref(-1);
  
  const openHelpDropdown = (index) => {
    helpDropdownOpen.value = index;
  };
  
  const closeHelpDropdown = () => {
    helpDropdownOpen.value = -1;
  };
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #060139;
  }
  
  .dropdown-card {
    margin-left: 14em;
    width: 100%;
    min-height: 80vh;
    max-height: 80vh;
  }
  </style>
  