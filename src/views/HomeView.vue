<template>
  <title>LMS</title>
  <main :class="['relative bg-charcoal text-white']">
    <div
      :class="[
        'absolute bottom-0 left-0 right-0 top-0  ',
        'bg-[linear-gradient(to_right,#465257_1px,transparent_1px),linear-gradient(to_bottom,#465257_1px,transparent_1px)]',
        'bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]'
      ]"
    ></div>
    <div class="container h-screen grid md:grid-cols-2 content-center gap-10 relative z-10">
      <!-- logo -->
      <AppLogo class="absolute left-4 top-4" />

      <section>
        <h1 :class="[' text-3xl md:text-5xl font-bold']">Streamline Leave Management with Ease</h1>
        <p class="my-8 text-lg">
          Easily manage time-off requests with Flexi. Quick applications for employees, fast
          approvals for managers, real-time tracking, and automated leave balances. Boost
          productivity and stay compliant. Try Flexi now!
        </p>
        <div :class="['flex gap-x-5']">
          <button
            :class="[
              'bg-lemonYellow hover:bg-lemonYellow/80  py-3 px-6 rounded ',
              'text-black font-semibold text-lg',
              'inline-flex items-center transition-all duration-200'
            ]"
            @click="authenticate('signup')"
          >
            <span>Register</span></button
          ><button
            :class="[
              'bg-transparent hover:bg-white/10 text-white font-semibold text-lg',
              ' py-3 px-6 rounded inline-flex items-center transition-all duration-200'
            ]"
            @click="authenticate('login')"
          >
            <span>Login</span>
          </button>
        </div>
      </section>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppLogo from '@/components/shared/AppLogo.vue'

const router = useRouter()

function authenticate(view: 'login' | 'signup') {
  router.push({
    name: view
  })
}
</script>
