<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import HeaderNav from '@/components/HeaderNav.vue'
import footerArea from '@/components/footerArea.vue'
</script>

<template>
  <HeaderNav />
  <RouterView />
  <footerArea />
</template>
