import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";

export const useCigPerDayStore = defineStore("cigPerDay", () => {
  const cigPerDay = ref<number>(20);
  const setCigPerDay = (count: number) => {
    cigPerDay.value = count;
  };

  return {
    cigPerDay,
    setCigPerDay
  };
});

export const useCigPerDay = () => {
  const cigPerDayStore = useCigPerDayStore();

  const { cigPerDay } = storeToRefs(cigPerDayStore);

  return { cigPerDay };
};

export const useSetCigPerDay = () => {
  const cigPerDayStore = useCigPerDayStore();

  const { setCigPerDay } = cigPerDayStore;

  return { setCigPerDay };
};
