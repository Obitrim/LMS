<template>
  <title>Employees</title>
  <div class="p-4">
    <header :class="['py-8 flex justify-between']">
      <div>
        <h1 :class="['font-bold text-2xl']">Employees</h1>
        <p :class="['text-gray-600 text-sm']">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, labore!
        </p>
      </div>
      <div>
        <button>Add Employee</button>
      </div>
    </header>
    <AppTable
      hideHeader
      :columns="[
        { label: '#', fieldKey: 'employeeID' },
        { label: 'Name', fieldKey: 'lastName+firstName' },
        { label: 'Department', fieldKey: 'department' },
        { label: 'Position', fieldKey: 'position' },
        { label: 'Email', fieldKey: 'emailAddress' },
        { label: 'Hire date', fieldKey: 'dateOfHire' },
        { label: 'Leave Balance', fieldKey: 'leaveBalance' },
        { label: 'Job title', fieldKey: 'jobTitle' },
        { label: 'Work location', fieldKey: 'workLocation' }
      ]"
      rowIdFieldKey="employeeID"
      :data="employeeList"
    >
      <template #heading> Employees </template>
    </AppTable>
  </div>
</template>

<script setup lang="ts">
import AppTable from '@/components/shared/AppTable.vue';
import { employeeList } from '@/data/employees.data';
</script>

<style scoped></style>
