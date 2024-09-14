<template>
  <div :class="['overflow-x-auto border border-gray-200   mt-8 rounded']">
    <div :class="['flex  ']">
      <div :class="['min-w-[220px] max-w-[220px]', 'sticky left-0 z-30 bg-gray-100', 'relative']">
        <Icon
          icon="material-symbols-light:person-search"
          :height="24"
          :class="['absolute left-2 top-1/2 -translate-y-1/2']"
        />
        <input
          type="text"
          :class="[
            'h-full w-full p-2 box-border bg-inherit focus:outline-none pl-9',
            'text-sm text-gray-600 placeholder:text-xs'
          ]"
          v-model="searchKey"
          placeholder="Search by employee name...."
        />
      </div>
      <div :class="['flex-1']">
        <div
          :class="['grid grid-cols-[31]']"
          :style="{ gridTemplateColumns: `repeat(${daysInSelectedPeriod},56px)` }"
        >
          <div
            v-for="n in getDaysInMonth(monthYearStore.period)"
            :key="n"
            :class="['h-14 flex items-center justify-center ', ' flex flex-col']"
          >
            <span :class="['capitalize text-gray-500 text-xs ']">{{
              format(
                new Date(monthYearStore.period.getFullYear(), monthYearStore.period.getMonth(), n),
                'EEE'
              )
            }}</span>
            <span> {{ n }}</span>
          </div>
        </div>
      </div>
    </div>
    <div :class="['h-[calc(100dvh-216px)] bg-white']">
      <div
        :class="['flex ', 'group']"
        v-for="leaveGroup in groupedEmployeeLeaves"
        :key="leaveGroup.employee.employeeID"
      >
        <div
          :class="[
            'min-w-[220px] border-r max-w-[220px] h-9  bg-white  group-hover:bg-charcoal group-hover:text-white',
            'sticky left-0 z-30',
            'px-3 flex items-center'
          ]"
        >
          <div
            :class="[
              'h-7 w-7 rounded-full mr-2 uppercase text-xs',
              'flex items-center justify-center',
              'bg-gray-200 group-hover:!text-charcoal'
            ]"
          >
            {{
              EmployeeHelper.initials(
                `${leaveGroup.employee.firstName} ${leaveGroup.employee.lastName}`
              )
            }}
          </div>
          {{
            EmployeeHelper.fullName(
              leaveGroup.employee.firstName as string,
              leaveGroup.employee.lastName as string
            )
          }}
        </div>
        <div :class="['flex-1']">
          <div
            :class="['grid  bg-white']"
            :style="{ gridTemplateColumns: `repeat(${daysInSelectedPeriod},56px)` }"
          >
            <div
              v-for="n in daysInSelectedPeriod"
              :key="n"
              :class="[
                'w-14 h-9 flex items-center justify-center ',
                'relative  box-border border-gray-200 group/trigger',
                n > 1 && 'border-l'
              ]"
            >
              <button
                type="button"
                :class="[
                  'p-1 border border-dashed border-gray-400 opacity-0 rounded',
                  'group-hover/trigger:opacity-100'
                ]"
              >
                <Icon
                  icon="ph:plus-light"
                  :class="['opacity-0 group-hover/trigger:opacity-100  text-gray-500']"
                  :height="16"
                />
              </button>
              
            </div>
          </div>
        </div>
      </div>

      <template v-if="groupedEmployeeLeaves.length < 21">
        <div :class="['flex ']" v-for="val in 21 - groupedEmployeeLeaves.length" :key="val">
          <div
            :class="[
              'min-w-[220px] max-w-[220px] h-9  bg-white',
              'sticky left-0 z-30',
              'px-4 flex items-center'
            ]"
          ></div>
          <div :class="['flex-1']">
            <div
              :class="['grid  bg-white']"
              :style="{ gridTemplateColumns: `repeat(${daysInSelectedPeriod},56px)` }"
            >
              <button
                type="button"
                v-for="n in daysInSelectedPeriod"
                :key="n"
                :class="[
                  'h-9 flex items-center justify-center ',
                  'relative border-l box-border border-gray-200'
                ]"
              ></button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmployeeHelper from '@/employees/helpers/employee.helper';

import lodash from '@/shared/helpers/lodash.helper';
import { useMonthYearNavigatorStore } from '@/shared/store/month_year_navigator.store';
import { format, getDaysInMonth } from 'date-fns';
import { computed, ref } from 'vue';
import type { ILeave } from '../types/leave.type';
import { Icon } from '@iconify/vue/dist/iconify.js';

interface LeaveCalendarProps {
  leaves: ILeave[];
}
const props = defineProps<LeaveCalendarProps>();

const searchKey = ref('');
const monthYearStore = useMonthYearNavigatorStore();

const daysInSelectedPeriod = computed(() => getDaysInMonth(monthYearStore.period));

const groupedEmployeeLeaves = computed(() => {
  const searchRegex = new RegExp(searchKey.value, 'gi');
  const filteredLeaves = props.leaves.filter(
    (leave) =>
      searchRegex.test(leave.employee.firstName ?? '') ||
      searchRegex.test(leave.employee.lastName ?? '')
  );
  const leaveGroups = lodash.groupBy(filteredLeaves, 'employee.employeeID');
  const groupedLeaveList = [];
  for (const leaves of Object.values(leaveGroups)) {
    groupedLeaveList.push({ employee: leaves[0].employee, leaves });
  }

  return groupedLeaveList;
});
</script>
