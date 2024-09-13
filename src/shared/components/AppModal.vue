<template>
  <teleport to="#modals">
    <Transition name="fade" appear>
      <div
        :class="[
          'fixed inset-0 z-10 h-screen w-screen overflow-hidden',
          'bg-charcoal bg-opacity-40',
          'flex flex-col items-center justify-center'
        ]"
        v-if="$props.show"
        @click.self="$emit('close')"
      >
        <div :class="cn(['max-w-5xl bg-white rounded mx-auto w-full', $props.contentClass])">
          <slot />
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup lang="ts">
import cn from '@/helpers/cn.ts';
export type TAppModalProps = {
  show?: boolean;
  contentClass?: string;
};

withDefaults(defineProps<TAppModalProps>(), {
  show: false
});

defineEmits<{
  (e: 'close'): void;
}>();
</script>
