<template>
  <button :type="type" @click.stop="emits('click', $event)">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, type ButtonHTMLAttributes } from "vue";

interface LoadableButtonProps {
  type: ButtonHTMLAttributes["type"];
  loading: boolean;
  disabled: boolean;
}

withDefaults(defineProps<LoadableButtonProps>(), {
  type: "button",
});

const emits = defineEmits<{
  (e: "click", $event: MouseEvent): void;
}>();
</script>
