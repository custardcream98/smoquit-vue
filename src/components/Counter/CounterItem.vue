<template>
  <li>
    {{ emoji }}
    <em>
      {{ highlightedText }}
    </em>
    {{ restText }}
  </li>
</template>

<script lang="ts" setup>
type CounterItemProps = {
  emoji: string;
  highlightedText: string;
  restText: string;
};
defineProps<CounterItemProps>();
</script>
