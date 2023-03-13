<script setup lang="ts">
import Counter from "@/components/Counter/index.vue";
import TheGreetingMessage from "@/components/Layout/TheGreetingMessage.vue";
import LoadableButton from "@/components/LoadableButton.vue";
import { ref } from "vue";

const isClicked = ref<boolean>(false);

const handleClick = (_: MouseEvent) => {
  isClicked.value = true;
};
</script>

<template>
  <TheGreetingMessage />
  <LoadableButton
    v-if="!isClicked"
    :loading="false"
    :disabled="false"
    @click="handleClick($event)"
  >
    노담 시작하기</LoadableButton
  >
  <Counter v-else />
</template>
