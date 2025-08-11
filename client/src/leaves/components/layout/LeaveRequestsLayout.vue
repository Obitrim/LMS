<template>
  <div :class="['p-4']">
    <div :class="['flex gap-x-4 items-center']">
      <button
        :class="[
          'rounded-md  px-4 text-sm py-2 overflow-clip',
          route.name == 'leave-requests-list' && 'bg-charcoal  text-white'
        ]"
        @click="router.push({ name: 'leave-requests-list' })"
      >
        List</button
      ><button
        :class="[
          'rounded-md  px-4 text-sm py-2 overflow-clip',
          route.name == 'leave-requests-calendar' && 'bg-charcoal  text-white'
        ]"
        @click="router.push({ name: 'leave-requests-calendar' })"
      >
        Calendar
      </button>

      <MonthYearNavigator :class="['ml-auto']" />
    </div>

    <!-- Page content -->
    <RouterView :leaves="leaves" />
  </div>
</template>

<script setup lang="ts">
import { leaveList } from '@/leaves/data/leaves.data';
import type { ILeave } from '@/leaves/types/leave.type';
import MonthYearNavigator from '@/shared/components/MonthYearNavigator.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const leaves = ref<ILeave[]>([]);

onMounted(() => {
  leaves.value = leaveList;
});
</script>
