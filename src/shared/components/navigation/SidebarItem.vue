<template>
  <div>
    <router-link
      :to="{ name: $props.item.routeName }"
      :class="[
        ' py-2 px-2 ',
        'flex items-center gap-1',
        'hover:bg-gray-200 border-l-4 border-transparent rounded'
      ]"
      exact-active-class="border-charcoal bg-gray-200"
    >
      <Icon
        :icon="
          $route.name === $props.item.routeName
            ? $props.item.icon.active
            : $props.item.icon.inactive
        "
        :width="20"
      />
      <span :class="['!text-sm', $route.name === $props.item.routeName ? '' : 'text-gray-600']">{{
        $props.item.text
      }}</span>
    </router-link>

    <div :class="['']" v-if="$props.item.children && $props.item.children.length > 0">
      <router-link
        v-for="child in $props.item.children"
        :key="child.routeName"
        :to="{ name: child.routeName }"
        :class="[
          'py-1 px-2 pl-7 relative',
          'flex items-center gap-2 text-sm',
          'border-l-4 border-transparent rounded group'
        ]"
      >
        <div
          :class="[
            'relative',
            'w-2 h-2 rounded-full group-hover:bg-gray-400',
            $route.name === child.routeName
              ? 'bg-charcoal group-hover:bg-charcoal'
              : 'bg-transparent '
          ]"
        ></div>
        <span
          :class="[
            $route.name === child.routeName ? 'text-charcoal font-semibold' : 'text-gray-600'
          ]"
          >{{ child.text }}</span
        >
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TNavigationItem } from '@/shared/types/navigation.type';
import { Icon } from '@iconify/vue/dist/iconify.js';

type TSidebarItemProps = {
  item: TNavigationItem;
};

defineProps<TSidebarItemProps>();
</script>

<style scoped></style>
