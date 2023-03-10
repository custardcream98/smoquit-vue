<template>
  <p>
    어서오세요, {{ name }}님 👋
  </p>
  <p>
    {{ greeting }}
  </p>
</template>

<script lang="ts" setup>
import greetingMessage from '@/constants/greeting';
import { randomlySelectInArray } from '@/helpers/object';
import { ref } from 'vue';

const name = ref<string>("");

const greeting = randomlySelectInArray(greetingMessage);
</script>