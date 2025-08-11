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
          <!-- <KeepAlive> -->
          <RouterView v-slot="{ Component }">
            <!-- <Transition name="fade"> -->
            <Component :is="Component" />
            <!-- </Transition> -->
          </RouterView>
          <!-- </KeepAlive> -->
        </div>
      </div>
    </main>
  </GridBackground>
</template>

<script setup lang="ts">
import AppLogo from '@/shared/components/AppLogo.vue';
import GridBackground from '@/shared/components/GridBackground.vue';
import AppSidebar from '@/shared/components/navigation/AppSidebar.vue';
</script>
