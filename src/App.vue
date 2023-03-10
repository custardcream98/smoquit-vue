<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from './components/Layout/AppLayout.vue';
import GlobalNavbar from './components/Layout/GlobalNavbar.vue';
</script>

<template>
   <GlobalNavbar />
   <AppLayout>
      <RouterView />
   </AppLayout>
</template>
