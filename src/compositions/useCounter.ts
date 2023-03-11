import { onMounted, ref } from "vue";

export const useCounter = (initialTime: number) => {
  const time = ref<number>(initialTime);

  onMounted(() => {
    setInterval(() => {
      time.value += 1;
    }, 1000);
  });

  return { time };
};
