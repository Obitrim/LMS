<script setup lang="ts">
import GridBackground from '@/components/shared/GridBackground.vue'
</script>

<template>
  <GridBackground>
    <main :class="['grid md:grid-cols-2 min-h-screen']">
      <div class="md:flex flex-col p-5 hidden">
        <div class="flex-1">
          <!-- logo -->
          <router-link to="/" class="">
            <img src="/images/logo.png" alt="logo" class="w-12 h-auto" />
          </router-link>
        </div>
        <small class="text-gray-300 text-xs block p-3 text-center"
          >&copy;{{ new Date().getFullYear() }} The software lab. All rights reserved.</small
        >
      </div>
      <div
        :class="[
          'bg-white p-5 pt-16 md:pt-5',
          'flex flex-col md:justify-center ',
          'mt-12 rounded-t-lg md:mt-0 md:rounded-none'
        ]"
      >
        <div :class="['max-w-lg w-full mx-auto']">
          <router-view />
        </div>
      </div>
    </main>
  </GridBackground>
</template>
