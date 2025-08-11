<template>
  <div :class="['flex items-center gap-2']">
    <button
      type="button"
      :class="['rounded bg-gray-300 font-black']"
      @click="monthYearStore.previousMonth"
    >
      <Icon icon="material-symbols-light:keyboard-arrow-left" :height="24" />
    </button>
    <span :class="['text-sm block text-center min-w-[115px]']">{{
      format(monthYearStore.period, 'MMMM yyyy')
    }}</span>
    <button
      type="button"
      :class="['rounded bg-gray-300 font-black']"
      @click="monthYearStore.nextMonth"
    >
      <Icon icon="material-symbols-light:keyboard-arrow-right" :height="24" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import { useMonthYearNavigatorStore } from '../store/month_year_navigator.store';
import { Icon } from '@iconify/vue/dist/iconify.js';

const monthYearStore = useMonthYearNavigatorStore();
</script>
