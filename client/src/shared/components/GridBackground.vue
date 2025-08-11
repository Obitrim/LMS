<template>
  <div :class="['relative bg-charcoal']">
    <div
      :class="[
        'absolute bottom-0 left-0 right-0 top-0  ',
        'bg-[linear-gradient(to_right,#465257_1px,transparent_1px),linear-gradient(to_bottom,#465257_1px,transparent_1px)]',
        'bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]'
      ]"
    ></div>

    <div class="relative z-10"><slot /></div>
  </div>
</template>

<script setup lang="ts"></script>
