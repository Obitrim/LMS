import { ref } from 'vue';
import { defineStore } from 'pinia';
import { addMonths, subMonths } from 'date-fns';

export const useMonthYearNavigatorStore = defineStore('month_year_navigator_store', () => {
  const period = ref(new Date());

  function nextMonth() {
    period.value = addMonths(period.value, 1);
  }

  function previousMonth() {
    period.value = subMonths(period.value, 1);
  }

  return {
    period,
    nextMonth,
    previousMonth
  };
});
