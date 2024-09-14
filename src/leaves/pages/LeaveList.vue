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

      <div :class="['ml-auto flex items-center gap-2']">
        <button type="button" :class="['rounded bg-gray-300 font-black']" @click="previousMonth">
          <Icon icon="material-symbols-light:keyboard-arrow-left" :height="24" />
        </button>
        <span :class="['text-sm block text-center min-w-[115px]']">{{
          format(period, 'MMMM yyyy')
        }}</span>
        <button type="button" :class="['rounded bg-gray-300 font-black']" @click="nextMonth">
          <Icon icon="material-symbols-light:keyboard-arrow-right" :height="24" />
        </button>
      </div>
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
        :data="leaveList"
      >
        <template #heading> Employees </template>
      </AppTable>
    </template>
    <template v-else>
      <div :class="['overflow-x-auto   mt-8 rounded']">
        <div :class="['flex  ']">
          <div
            :class="['min-w-[220px] max-w-[220px]', 'sticky left-0 z-30 bg-gray-100', 'relative']"
          >
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
              placeholder="Search by employee name...."
            />
          </div>
          <div :class="['flex-1']">
            <div
              :class="['grid grid-cols-[31]']"
              :style="{ gridTemplateColumns: 'repeat(31,64px)' }"
            >
              <div
                v-for="n in getDaysInMonth(period)"
                :key="n"
                :class="['w-14 h-14 flex items-center justify-center ', ' flex flex-col']"
              >
                <span :class="['uppercase text-gray-500 text-xs ']">{{
                  format(new Date(period.getFullYear(), period.getMonth(), n), 'EEE')
                }}</span>
                <span> {{ n }}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="['flex  bg-white', 'group ']"
          v-for="leaveGroup in groupedEmployeeLeaves"
          :key="leaveGroup.employee.employeeID"
        >
          <div
            :class="[
              'min-w-[220px] max-w-[220px] h-9 bg-white group-hover:bg-gray-200',
              'sticky left-0 z-30',
              'px-4 flex items-center'
            ]"
          >
            {{
              EmployeeHelper.fullName(
                leaveGroup.employee.firstName as string,
                leaveGroup.employee.lastName as string
              )
            }}
          </div>
          <div :class="['flex-1']">
            <div
              :class="['grid grid-cols-[31]']"
              :style="{ gridTemplateColumns: 'repeat(31,64px)' }"
            >
              <button
                type="button"
                v-for="n in getDaysInMonth(period)"
                :key="n"
                :class="[
                  'w-14 h-9 flex items-center justify-center ',
                  'relative border-l box-border border-gray-200 group/trigger'
                ]"
              >
                <Icon
                  icon="ph:plus-light"
                  :class="[
                    'opacity-0 group-hover/trigger:opacity-100 group-hover/trigger:scale-110'
                  ]"
                  :height="16"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- </Transition> -->
  </div>
</template>

<script setup lang="ts">
import EmployeeHelper from '@/employees/helpers/employee.helper';
import { leaveList } from '@/leaves/data/leaves.data';
import AppTable from '@/shared/components/AppTable.vue';
import lodash from '@/shared/helpers/lodash.helper';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { addMonths, format, getDaysInMonth, subMonths } from 'date-fns';
import { computed, ref } from 'vue';

const activeLeaveTab = ref<'list' | 'calendar'>('list');
const period = ref(new Date());

function nextMonth() {
  period.value = addMonths(period.value, 1);
}

function previousMonth() {
  period.value = subMonths(period.value, 1);
}

const groupedEmployeeLeaves = computed(() => {
  const leaveGroups = lodash.groupBy(leaveList, 'employee.employeeID');
  const groupedLeaveList = [];
  for (const leaves of Object.values(leaveGroups)) {
    groupedLeaveList.push({ employee: leaves[0].employee, leaves });
  }

  return groupedLeaveList;
});
</script>

<style scoped></style>
