<template>
  <title>Leaves</title>
  <div class="p-4">
    <div :class="['flex gap-x-4 items-center']">
      <button
        :class="[
          'rounded-md  px-4 text-sm py-2 overflow-clip',
          activeLeaveTab == 'list' && 'bg-charcoal  text-white'
        ]"
        @click="activeLeaveTab = 'list'"
      >
        List</button
      ><button
        :class="[
          'rounded-md  px-4 text-sm py-2 overflow-clip',
          activeLeaveTab == 'calendar' && 'bg-charcoal  text-white'
        ]"
        @click="activeLeaveTab = 'calendar'"
      >
        Calendar
      </button>
    </div>

    <!-- <Transition name="fade" mode="in-out"> -->
    <template v-if="activeLeaveTab == 'list'">
      <header :class="['py-8 flex justify-between']">
        <div>
          <h1 :class="['font-bold text-2xl']">Leaves</h1>
          <p :class="['text-gray-600 text-sm']">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, labore!
          </p>
        </div>
        <div>
          <button>Request Leave</button>
        </div>
      </header>
      <AppTable
        hideHeader
        :columns="[
          { label: '#', fieldKey: 'id' },
          { label: 'Employee', fieldKey: 'employee.lastName+employee.firstName' },
          { label: 'Type', fieldKey: 'leaveType' },
          { label: 'Start date', fieldKey: 'startDate' },
          { label: 'End date', fieldKey: 'endDate' },
          { label: '', fieldKey: '' }
        ]"
        rowIdFieldKey="id"
        :data="leaveList"
      >
        <template #heading> Employees </template>
      </AppTable>
    </template>
    <template v-else>
      <div>Calendar</div>
    </template>
    <!-- </Transition> -->
  </div>
</template>

<script setup lang="ts">
import { leaveList } from '@/leaves/data/leaves.data';
import AppTable from '@/shared/components/AppTable.vue';
import { ref } from 'vue';

const activeLeaveTab = ref<'list' | 'calendar'>('list');
</script>

<style scoped></style>
