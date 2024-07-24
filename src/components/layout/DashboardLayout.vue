<template>
  <GridBackground :class="['h-screen overflow-clip']">
    <main :class="['min-h-screen']">
      <header :class="['px-4 h-header', 'flex items-center']">
        <div class="flex items-center gap-2">
          <AppLogo class="static w-9" />
          <strong class="text-lemonYellow text-lg">LMS</strong>
        </div>
      </header>
      <div
        :class="[
          'bg-gray-100 h-[calc(100vh-60px)] overflow-hidden',
          'rounded-t-md shadow-inner',
          'flex'
        ]"
      >
        <div class="w-sidebar flex flex-col gap-y-1 p-4">
          <router-link :to="{ name: 'dashboard-home' }" :class="['block py-0.5 px-2']">
            <!-- <TemplateIcon size="4" /> -->
            Dashboard
          </router-link>
          <router-link :to="{ name: 'employee-list' }" :class="['block py-0.5 px-2']"
            >Employees</router-link
          >
          <router-link :to="{ name: 'leave-list' }" :class="['block py-0.5 px-2']"
            >Leaves</router-link
          >
        </div>
        <div class="flex-1">
          <router-view />
        </div>
      </div>
    </main>
  </GridBackground>
</template>

<script setup lang="ts">
import AppLogo from '@/components/shared/AppLogo.vue';
</script>
