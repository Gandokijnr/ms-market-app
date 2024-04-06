<template>
    <div class="container grid grid-cols-4 sticky top-0">
      <!-- Sidebar -->
      <div class="sidebar h-screen col-span-1 bg-gray-900 py-10 flex flex-col gap-8">
        <div v-for="(item, index) in dropdownItems" :key="index" class="relative inline-block text-left" @mouseenter="openHelpDropdown(index)" @mouseleave="closeHelpDropdown(index)">
          <div class="relative">
            <button class="flex items-center justify-between text-white border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              {{ item.title }}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <ul v-show="helpDropdownOpen === index" class="absolute bg-white left-40 border-gray-300 rounded-md shadow-lg dropdown-card">
              <li v-for="(item, index) in item.subItems" :key="index" class="px-4 py-2 hover:bg-blue-950 hover:text-white text-black">{{ item }}</li>
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
    margin-left: 13em;
    min-width: 100%;
    margin-top: -2em;
  }
  </style>
  