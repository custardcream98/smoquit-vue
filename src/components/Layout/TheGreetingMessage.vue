<template>
  <p>어서오세요, {{ name }}님 👋</p>
  <p>
    {{ greeting }}
  </p>
</template>

<script lang="ts" setup>
import GREETING_MESSAGE from "@/constants/greeting";
import { randomlySelectInReadonlyArray } from "@/helpers/object";
import { ref } from "vue";

const name = ref<string>("");

const greeting = randomlySelectInReadonlyArray(GREETING_MESSAGE);
</script>
