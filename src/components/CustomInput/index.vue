<template>
  <div>
    <VLabel :htmlFor="id">{{ label }}</VLabel>
    <VInput :id="id" :type="type" :required="required" :pattern="pattern" />
  </div>
</template>

<script lang="ts" setup>
import type { InputHTMLAttributes } from "vue";
import { toRefs } from "vue";
import VInput from "./VInput.vue";
import VLabel from "./VLabel.vue";

interface InputProps {
  id: string;
  type?: InputHTMLAttributes["type"];
  required?: InputHTMLAttributes["required"];
  pattern?: InputHTMLAttributes["pattern"];
  label: string;
}

const props = defineProps<InputProps>();
const { id, type, label, required, pattern } = toRefs(props);
</script>
