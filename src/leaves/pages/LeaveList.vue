<template>
  <title>Leaves</title>
  <header :class="['py-8 flex justify-between']">
    <div>
      <h1 :class="['font-bold text-2xl']">Leaves</h1>
      <p :class="['text-gray-600 text-sm']">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, labore!
      </p>
    </div>
    <div>
      <button>New Request</button>
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
    :data="props.leaves"
  >
    <template #heading> Employees </template>
  </AppTable>
</template>

<script setup lang="ts">
import AppTable from '@/shared/components/AppTable.vue';
import type { ILeave } from '../types/leave.type';

interface LeaveListProps {
  leaves: ILeave[];
}

const props = defineProps<LeaveListProps>();
</script>

<style scoped></style>
