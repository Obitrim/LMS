<template>
  <div class="w-sidebar flex flex-col gap-y-1 p-4">
    <nav class="flex-1">
      <template v-for="item in DASHBOARD_SIDEBAR_ITEMS" :key="item.routeName + item.text">
        <SidebarItem :item="item" />
      </template>
    </nav>

    <button :class="['flex items-center gap-x-1.5 px-2', 'text-gray-400']">
      <span>
        <Icon icon="solar:settings-bold" class="text-gray-400" :width="20" />
      </span>
      <span>Settings</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { DASHBOARD_SIDEBAR_ITEMS } from '@/data/navigation.data';
import { Icon } from '@iconify/vue';
import SidebarItem from './SidebarItem.vue';
</script>

<style scoped></style>
