<template>
  <input :type="type" :required="required" :pattern="pattern" />
</template>

<script lang="ts" setup>
import type { InputHTMLAttributes } from "vue";
import { toRefs } from "vue";

interface InputProps {
  type?: InputHTMLAttributes["type"];
  required?: InputHTMLAttributes["required"];
  pattern?: InputHTMLAttributes["pattern"];
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
});

const { type, required, pattern } = toRefs(props);
</script>
