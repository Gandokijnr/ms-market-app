<template>
    <div>
      <h3 class="text-2xl text-gray-500 font-semibold mt-12">Trending Ads</h3>
    </div>
    <div class="trending-ads container flex justify-between flex-wrap mt-4">  
      <!-- Trending Ad Cards -->
      <div v-for="(ad, index) in trendingAds" :key="index" class="max-w-60 min-w-60 flex items-center justify-center mb-4">
        <div class="bg-white hover:shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
            <img class="w-full h-56 max-w-52 object-cover object-center rounded-t-lg" :src="ad.image" alt="ad image">
          <div class="p-4">
            <h3 class="text-gray-900 font-semibold text-lg">{{ ad.title }}</h3>
            <p class="mt-2 text-gray-600">{{ ad.subtitle }}</p>
            <p class="mt-2 text-gray-600">{{ ad.price }}</p>
            <!-- <div class="mt-4 flex justify-between">
              <button @click="showMobileNumber(ad)" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Show Mobile Number</button>
              <button @click="viewMore(ad)" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none">View More</button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const trendingAds = [
    { 
      title: 'iPhone 12 Pro',
      subtitle: '6.1-inch Super Retina XDR display',
      price: '$999',
      image: 'https://images.unsplash.com/photo-1626196278426-3fdf03f70f0c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      title: 'Samsung Galaxy S21',
      subtitle: '6.2-inch Dynamic AMOLED 2X display',
      price: '$799',
      image: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      title: 'Dell XPS 13',
      subtitle: '13.4-inch InfinityEdge display',
      price: '$1299',
      image: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      title: 'LG OLED CX Series TV',
      subtitle: '65-inch 4K OLED display',
      price: '$2499',
      image: 'https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      title: 'Bose SoundLink Revolve',
      subtitle: 'Portable Bluetooth speaker',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      title: 'Apple Watch Series 6',
      subtitle: 'GPS + Cellular, 44mm Aluminum Case',
      price: '$499',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      title: 'Apple Watch Series 6',
      subtitle: 'GPS + Cellular, 44mm Aluminum Case',
      price: '$499',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      title: 'Apple Watch Series 6',
      subtitle: 'GPS + Cellular, 44mm Aluminum Case',
      price: '$499',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      title: 'Samsung Galaxy S21',
      subtitle: '6.2-inch Dynamic AMOLED 2X display',
      price: '$799',
      image: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      title: 'Dell XPS 13',
      subtitle: '13.4-inch InfinityEdge display',
      price: '$1299',
      image: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      title: 'LG OLED CX Series TV',
      subtitle: '65-inch 4K OLED display',
      price: '$2499',
      image: 'https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      title: 'LG OLED CX Series TV',
      subtitle: '65-inch 4K OLED display',
      price: '$2499',
      image: 'https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];
  
  const showMobileNumber = (ad) => {
    // Function to show mobile number of the user for the selected ad
    console.log(`Mobile number of the user for ${ad.title}: 123-456-7890`);
  };
  
  const viewMore = (ad) => {
    // Function to view more details about the selected ad
    console.log(`View more about ${ad.title}`);
  };
  </script>
  
  <style scoped>
  .trending-ads{
    width: 90em;
  }
  </style>
  