<template>
  <label :for="htmlFor" v-bind="restProps">
    <slot />
  </label>
</template>

<script lang="ts" setup>
import type { LabelHTMLAttributes } from "vue";
import { toRefs } from "vue";

interface LabelProps extends Omit<LabelHTMLAttributes, "for"> {
  htmlFor: string;
}

const props = defineProps<LabelProps>();
const { htmlFor, ...restProps } = toRefs(props);
</script>
