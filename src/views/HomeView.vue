<template>
  <title>LMS</title>
  <main :class="['relative bg-charcoal text-white']">
    <div
      class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#465257_1px,transparent_1px),linear-gradient(to_bottom,#465257_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
    ></div>
    <div class="container h-screen grid grid-cols-2 content-center gap-10 relative z-10">
      <!-- logo -->
      <div class="absolute left-4 top-4">
        <img src="/images/logo.png" alt="logo" class="w-12 h-auto" />
      </div>
      <section>
        <h1 :class="['text-5xl font-bold']">Streamline Leave Management with Ease</h1>
        <p class="my-8">
          Easily manage time-off requests with Flexi. Quick applications for employees, fast
          approvals for managers, real-time tracking, and automated leave balances. Boost
          productivity and stay compliant. Try Flexi now!
        </p>
        <div><button class="">Register</button><button>Login</button></div>
      </section>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>
