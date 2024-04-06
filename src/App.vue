<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import HeaderNav from '@/components/HeaderNav.vue'
</script>

<template>
  <HeaderNav />
  <RouterView />
</template>
