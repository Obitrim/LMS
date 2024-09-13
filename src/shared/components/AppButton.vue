<template>
  <button
    :class="[
      props.variant == 'base' && 'bg-charcoal hover:bg-charcoal/90 text-white',
      'transition-all duration-150',
      'font-bold py-2 px-4 rounded focus:outline-none',
      'disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white'
    ]"
    type="submit"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type TButtonVariant = 'primary';
type TBaseButtonProps = {
  variant?: TButtonVariant;
};
const props = withDefaults(defineProps<TBaseButtonProps>(), {
  variant: 'base'
});
</script>
