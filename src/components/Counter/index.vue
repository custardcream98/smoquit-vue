<script lang="ts" setup>
import { computed } from 'vue';

import CounterList from './CounterList.vue';
import CounterItem from './CounterItem.vue';
import { secondsToString,secondsToDays } from '@/helpers/time';
import { useCigPerDay } from '@/stores/cigPerDay';
import { useCounter } from "@/compositions/useCounter";

const { cigPerDay } = useCigPerDay()
const { time } = useCounter(0);

const toleratedCigCount = computed(() => secondsToDays(time.value) * cigPerDay.value);

const toleratedCigText = computed(() => `${toleratedCigCount.value.toFixed(2)}개비의 담배`);
const savedTimeText = computed(() => secondsToString(parseFloat((toleratedCigCount.value * 15 * 60).toFixed(2))));
const savedMoneyText = computed(() => `${(toleratedCigCount.value * 225 + toleratedCigCount.value * 15 * 60 / 3600 * 9620).toFixed(2)}원`);
const savedLifeText = computed(() => `${secondsToString(parseFloat((toleratedCigCount.value * 5 * 60).toFixed(2)))}`);

</script>

<template>
  <CounterList>
    <CounterItem emoji="🚭" :highlightedText="toleratedCigText" restText="를 참았고" />
    <CounterItem emoji="⏱️" :highlightedText="savedTimeText" restText="를 아꼈고" />
    <CounterItem emoji="💵" :highlightedText="savedMoneyText" restText="을 벌었고" />
    <CounterItem emoji="😁" :highlightedText="savedLifeText" restText="만큼 더 살 수 있게 됐어요" />
  </CounterList>
</template>