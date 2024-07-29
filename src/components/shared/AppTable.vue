<template>
  <div class="bg-white shadow rounded">
    <header v-if="!$props.hideHeader">
      <div class="block px-4 py-2 font-bold">
        <slot name="heading"> Table Title </slot>
      </div>
    </header>
    <div class="flex flex-col overflow-x-auto">
      <div class="sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <table class="min-w-full text-start text-sm font-light text-surface">
              <thead class="border-b font-medium text-left">
                <tr>
                  <th
                    scope="col"
                    class="px-3 py-4"
                    v-for="column in $props.columns"
                    :key="column.fieldKey"
                  >
                    {{ column.label }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  :class="['even:bg-gray-50 hover:bg-gray-100 hover:cursor-pointer']"
                  v-for="record in $props.data"
                  :key="ObjectParser.parseField(record, $props.rowIdFieldKey)"
                >
                  <td
                    class="whitespace-nowrap px-3 py-2 font-medium text-gray-500"
                    v-for="col in $props.columns"
                    :key="col.fieldKey"
                  >
                    {{ ObjectParser.parseField(record, col.fieldKey) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ObjectParser } from '@/helpers/parsers.helper';

interface IAppTableProps {
  columns: ITableColumn[];
  data: ITableData[];
  rowIdFieldKey: string;
  hideHeader?: boolean;
}

interface ITableColumn {
  label: string;
  fieldKey: string;
}
interface ITableData {
  [key: string]: any;
}
const props = defineProps<IAppTableProps>();
</script>

<style scoped></style>
