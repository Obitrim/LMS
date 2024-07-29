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
          <div class="flex-1">
            <router-link
              :to="{ name: 'dashboard-home' }"
              :class="[
                ' py-2 px-2 ',
                'flex items-center gap-1',
                'hover:bg-gray-200 border-l-4 border-transparent rounded'
              ]"
              exact-active-class="border-charcoal bg-gray-200"
            >
              <Icon
                :icon="
                  $route.name === 'dashboard-home'
                    ? 'ic:baseline-dashboard'
                    : 'material-symbols-light:dashboard-outline'
                "
                :width="20"
              />
              <span :class="[$route.name === 'dashboard-home' ? '' : 'text-gray-600']"
                >Dashboard</span
              >
            </router-link>
            <router-link
              :to="{ name: 'employee-list' }"
              :class="[
                ' py-2 px-2 ',
                'flex items-center gap-1',
                'hover:bg-gray-200 border-l-4 border-transparent rounded'
              ]"
              exact-active-class="border-charcoal bg-gray-200"
            >
              <Icon
                :icon="$route.name === 'employee-list' ? 'mdi:users' : 'ph:users-light'"
                :width="20"
              />
              <span :class="[$route.name === 'employee-list' ? '' : 'text-gray-600']"
                >Employees</span
              >
            </router-link>
            <router-link
              :to="{ name: 'leave-list' }"
              :class="[
                ' py-0.5 px-1',
                'flex items-center gap-1',
                'hover:bg-gray-200 border-l-4 border-transparent rounded'
              ]"
              exact-active-class="border-charcoal bg-gray-200"
            >
              <Icon
                :icon="
                  $route.name === 'leave-list'
                    ? 'bitcoin-icons:calendar-filled'
                    : 'bitcoin-icons:calendar-outline'
                "
                :width="26"
              />
              <span :class="[$route.name === 'leave-list' ? '' : 'text-gray-600']"> Leaves</span>
            </router-link>
          </div>

          <button :class="['flex items-center gap-x-1.5 px-2', 'text-gray-400']">
            <span>
              <Icon icon="solar:settings-bold" class="text-gray-400" :width="20" />
            </span>
            <span>Settings</span>
          </button>
        </div>
        <div class="flex-1 h-full overflow-y-auto">
          <router-view />
        </div>
      </div>
    </main>
  </GridBackground>
</template>

<script setup lang="ts">
import AppLogo from '@/components/shared/AppLogo.vue';
import { Icon } from '@iconify/vue';
</script>
