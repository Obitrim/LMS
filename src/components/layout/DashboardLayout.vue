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
        <AppSidebar />
        <div class="flex-1 h-full overflow-y-auto">
          <router-view />
        </div>
      </div>
    </main>
  </GridBackground>
</template>

<script setup lang="ts">
import AppLogo from '@/components/shared/AppLogo.vue';
import AppSidebar from '../navigation/AppSidebar.vue';
</script>
