<template>
  <div :class="['p-4 grid gap-8']">
    <section class="flex flex-wrap gap-8">
      <div
        :class="[
          'max-w-64 flex-1 p-4 rounded shadow relative',
          'flex  items-center gap-x-6',
          ' bg-gradient-to-r from-orange-200 to-orange-400'
        ]"
      >
        <div>
          <Icon
            :icon="$route.name === 'employee-list' ? 'mdi:users' : 'ph:users-light'"
            :width="40"
            :class="['text-orange-800']"
          />
        </div>
        <div :class="['flex flex-col text-right flex-1']">
          <span>Total Employees</span> <strong :class="['text-3xl']">1000</strong>
        </div>
      </div>
      <div
        :class="[
          'max-w-64 flex-1  p-4 rounded shadow',
          'flex  items-center gap-x-6',
          ' bg-gradient-to-r from-green-200 to-green-400'
        ]"
      >
        <div>
          <Icon icon="bitcoin-icons:calendar-outline" :width="60" :class="['text-green-800']" />
        </div>
        <div :class="['flex flex-col text-right flex-1']">
          <span>Sick Leaves</span>
          <strong :class="['text-3xl']">30/50</strong>
          <span>Available</span>
        </div>
      </div>
      <div
        :class="[
          'max-w-64 flex-1  p-4 rounded shadow',
          'flex  items-center gap-x-6',
          ' bg-gradient-to-r from-pink-200 to-pink-400'
        ]"
      >
        <div>
          <Icon icon="bitcoin-icons:calendar-outline" :width="60" :class="['text-pink-800']" />
        </div>
        <div :class="['flex flex-col text-right flex-1']">
          <span>Annual Leaves</span>
          <strong :class="['text-3xl']">60/120</strong>
          <span>Available</span>
        </div>
      </div>
      <div
        :class="[
          'max-w-64 flex-1  p-4 rounded shadow',
          'flex  items-center gap-x-6',
          ' bg-gradient-to-r from-violet-200 to-violet-400'
        ]"
      >
        <div>
          <Icon icon="bitcoin-icons:calendar-outline" :width="60" :class="['text-violet-800']" />
        </div>
        <div :class="['flex flex-col text-right flex-1']">
          <span>Casual Leaves</span>
          <strong :class="['text-3xl']">60/60</strong>
          <span>Available</span>
        </div>
      </div>
      <div
        :class="[
          'max-w-64 flex-1  p-4 rounded shadow',
          'flex  items-center gap-x-6',
          ' bg-gradient-to-r from-yellow-200 to-yellow-400'
        ]"
      >
        <div>
          <Icon icon="bitcoin-icons:calendar-outline" :width="60" :class="['text-yellow-800']" />
        </div>
        <div :class="['flex flex-col text-right flex-1']">
          <span>Other Leaves</span>
          <strong :class="['text-3xl']">70/100</strong>
          <span>Available</span>
        </div>
      </div>
    </section>

    <section class="grid lg:grid-cols-2 gap-8">
      <div :class="['rounded bg-white shadow p-4']">
        <DataChart :option="pieChartOption" />
      </div>
      <div :class="['rounded bg-white shadow p-4']">
        <DataChart :option="comparisonToLastYearLeaveRequests" />
      </div>
    </section>

    <section>
      <AppTable
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
        <template #heading> Top Dependable Employees </template>
      </AppTable>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { ref } from 'vue';

import type { TBarChartOption, TPieChartOption } from '@/shared/types/chart.type';
import { employeeList } from '@/employees/data/employees.data';
import DataChart from '../components/DataChart.vue';
import AppTable from '@/shared/components/AppTable.vue';

const pieChartOption = ref<TPieChartOption>({
  title: {
    text: 'Top requested leave types',
    left: 'left'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top: '40px',
    data: ['Annual', 'Sick', 'Casual', 'Marital', 'Others']
  },
  series: [
    {
      name: 'Top requested leave types',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Annual' },
        { value: 310, name: 'Sick' },
        { value: 234, name: 'Casual' },
        { value: 135, name: 'Marital' },
        { value: 1548, name: 'Others' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});

const comparisonToLastYearLeaveRequests = ref<TBarChartOption>({
  title: {
    text: 'Top departmental requests'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['IT', 'HR', 'Finance', 'Receptionists', 'Managers', 'Scholarships']
  },
  series: [
    {
      name: '2011',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
      name: '2012',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
});
</script>
